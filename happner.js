module.exports = {
  configs: {
    "autoload":{
      "component":{
        name: "happner-dashboard",
        config: {
          startMethod:"initialize",
          schema:{
            "exclusive":false
          },
          web:{
            routes:{
              "static":"app"
            }
          }
        }
      }
    }
  }
}

/*

an alternative - demonstrates how one would share a bunch of modules on a single npm tree
module.exports = {
  suite:[
    {
      "name":"happner-dashboard",
      "path":__dirname + '/index.js',
      "autoload":{
        "component":{
          startMethod:"initialize",
          schema:{
            "exclusive":false
          },
          web:{
            routes:{
              "static":"app"
            }
          }
        }
      }
    }
  ]

}

*/