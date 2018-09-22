const MongoClient = require('mongodb').MongoClient;

class DAO {
    constructor(url, collectionName) {
        this.url = url;
        this.collectionName = collectionName;
    }
    _connect() {//连接数据库
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url, (err, db) => {
                if (err) {
                    console.log("数据库连接失败");
                    reject(err);
                    return;
                }
                console.log("数据库连接成功");
                resolve(db);
            })
        })
    }
    insert(documents, inserMany) {
        return new Promise((resolve, reject) => {
            this._connect().then((db) => {
                if (inserMany) {
                    //this.collectionName集合名字
                    db.collection(this.collectionName).insertMany(documents).then(res => {
                        resolve(res);
                        db.close();
                    });
                    return;
                }
                db.collection(this.collectionName).insertOne(documents).then((res) => {
                    resolve(res);
                    db.close;
                })
            })
        })
    }
    query(document, pageConfig) {
        document = document || {};
        pageConfig = pageConfig || { amout: 0, page: 0 };
        let resData = [];

        return new Promise((resolve, reject) => {
            this._connect().then((db) => {
                let cursor = db.collection(this.collectionName).find(document).limit(pageConfig.amount).skip(pageConfig.page*pageConfig.amount);
                cursor.each((err, data) => {
                    if (err) return reject(err);
                    if (data != null) {
                        resData.push(data);
                    } else {
                        resolve(resData);
                        db.close();
                    }
                })
            })
        })
    }
    del(query, inserMany) {
        return new Promise((resolve, reject) => {
            this._connect().then((db) => {
                if (inserMany) {
                    db.collection(this.collectionName).deleteMany(query).then(res => {
                        resolve(res);
                        db.close();
                    });
                    return;
                }
                db.collection(this.collectionName).deleteOne(query).then((res) => {
                    resolve(res);
                    db.close;
                })
            })
        })
    }
    updata(filter, updater) {
        return new Promise((resolve, reject) => {
            this._connect().then((db) => {
                db.collection(this.collectionName).updateMany(filter, { $set: updater }).then(res => {
                    resolve(res);
                    db.close();
                })
            })
        })
    }
}

let dao = new DAO('mongodb://localhost:27017/test', 'user');

//1.1插入
// dao.insert({name:'biao'});

//1.2查询
// dao.query({name:'biao'}).then((res)=>{
//     console.log(res[0])
// })

//1.3删除
// dao.del({name:'biao'})

//1.4更新
// dao.updata({name:'biao'},{name:'biao1',age:18})

// let arr = [];
// for(let i=0;i<100;i++){
//     arr.push({
//         userId:123,
//         age:10+i
//     })
// }
// dao.insert(arr,true);

//1.5分页
// dao.query({userId:123},{amount:5,page:5}).then((res)=>{
//     console.log(JSON.stringify(res))
// })