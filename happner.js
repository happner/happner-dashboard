module.exports = {
  configs: {
    "autoload": [
      {
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
      },
      {
        "module":{
          name:"happner-resources",
          config:{
            path:__dirname + "/node_modules/happner-resources/index.js"
          }
        },
        "component":{
          name:"happner-resources",
          moduleName: "happner-resources",
          config: {
            startMethod:"initialize",
            schema:{
              "exclusive":false
            },
            web:{
              routes:{
                "static":__dirname + "/node_modules/happner-resources/resources"
              }
            }
          }
        }
      }
      ]
  }
}
