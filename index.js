var student ={
    name:'ATEEQ UR REHMAN',
    age:'19',
    mobile:7975280964,
    address:{
        city:'banglore',
        state:'Karnataka',
        pin:560039
    }
}

console.log(student.name)
console.log(student['name'])

console.log(student.address.pin)
console.log(student['address']['pin'])


var vedio={
    name:'access101 js tutorials',
    play:function(){
        console.log('vedio played')
    },
    timer:[0,40,80]
}

console.log(vedio.name)
console.log(vedio.play())
console.log(video.timer)