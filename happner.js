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
      }
    ]
  }
}
