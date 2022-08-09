const { json } = require('body-parser');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
 //problem 1

/* Create an API for GET /movies that returns a list of movies.
 Define an array of movies in your code and return the value in response.*/

 router.get('/movies-list',function(req,res){
    let movies =['kGH','DDLG','RAB NE BANA DI JODI','MS DHONI UNTOLD STORY','RAJA']
    res.send(movies)
})
//problem2 & 3
/*Create an API GET /movies/:indexNumber 
(For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). 
You can define an array of movies again in your api
[‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’]
/movies/2*/

router.get('/movies/:indexNumber',function(req,res){
   const movie = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    const id  = req.params.indexNumber
   if(id < movie.length) {
    res.send(movie[id])
   }
   else{
     res.send("use vaild index")
   }

})
/



//problem 4
/*Write another api called GET /films. Instead of an array of strings define an array of movie objects this time.
 Each movie object should have values - id, name. An example of movies array is 
[ {
 “id”: 1,
 “name”: “The Shining”
}, {
 “id”: 2,
 “name”: “Incendies”
}, {
 “id”: 3,
 “name”: “Rang de Basanti”
}, {
 “id”: 4,
 “name”: “Finding Nemo”
}]

Return the entire array in this api’s response*/

router.get('/GET/films',function(req,res){
    let film=
    [   {"id": 1,"name": "The Shining",},
        {"id": 2,"name": "Incendies"},
      { "id": 3, "name": "Rang de Basanti"},
       {"id": 4, "name": "Finding Nemo"}
   ]
      res.send(film)
       
})


//problem 5

router.get('/GET/films/:filmId',function(req,res){
    let films=
    [   {"id": 1,"name": "The Shining",},
        {"id": 2,"name": "Incendies"},
      { "id": 3, "name": "Rang de Basanti"},
       {"id": 4, "name": "Finding Nemo"}
   ]
   let i= req.params.index;
   if(i > films.length){
                     return res.send("movies length is greater than the movies")
                      } else {
                               res.send(films[i-1])
                              }
   })

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;