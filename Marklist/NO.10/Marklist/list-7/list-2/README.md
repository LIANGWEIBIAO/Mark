# mongoose增删改查

## 1.1查询
obj.find(查询条件,callback);
``` javascript
	Model.find({},function(error,docs){
   	//若没有向find传递参数，默认的是显示所有文档
	});

	Model.find({ "age": 28 }, function (error, docs) {
 	    if(error){
    	    console.log("error :" + error);
 	    }else{
    	    console.log(docs); //docs: age为28的所有文档
	    }
	});
```

## 1.2Model保存方法
Model.create(文档数据, callback))
``` javascript
Model.create({ name:"model\_create", age:26}, function(error,doc){
    if(error) {
        console.log(error);
    } else {
        console.log(doc);
    }
});
```

## 1.3 entity保存方法
Entity.save(文档数据, callback))
model调用的是create方法，entity调用的是save方法
``` javascript
var Entity = new Model({name:"entity\_save",age: 27});

Entity.save(function(error,doc) {
	 if(error) {
        console.log(error);
    } else {
        console.log(doc);
    }
});
```

## 1.4 数据更新
obj.update(查询条件,更新对象,callback);
``` javascript
var conditions = {name : 'test\_update'};
var update = {$set : { age : 16 }};

TestModel.update(conditions, update, function(error){
    if(error) {
        console.log(error);
    } else {
        console.log('Update success!');
    }
});
```

## 1.5 删除数据
obj.remove(查询条件,callback);
``` javascript
var conditions = { name: 'tom' };

TestModel.remove(conditions, function(error){
   	if(error) {
       	console.log(error);
    }else {
        console.log('Delete success!');
    }
});
```

## 小结
- 查询：find查询返回符合条件一个、多个或者空数组文档结果。
- 保存：model调用create方法，entity调用的save方法。
- 更新：obj.update(查询条件,更新对象,callback)，根据条件更新相关数据。
- 删除：obj.remove(查询条件,callback)，根据条件删除相关数据。