const path=require("path");
module.exports={
    devServer:{
        proxy:{
            '/seckill.php':{
                target:"http://touch.m.dangdang.com",
                changeOrigin:true
            },
            '/h5ajax.php':{
                target:"http://touch.m.dangdang.com",
                changeOrigin:true
            },
            '/brand_seckill.php':{
                target:"http://touch.m.dangdang.com",
                changeOrigin:true
            },
            '/pintuan':{
                target:"http://widgets.dangdang.com",
                changeOrigin:true
            },
            '/api':{
                target:"http://39.97.33.178",
                changeOrigin:true
            },
        },
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "components":path.join(__dirname,"./src/components"),
                "common":path.join(__dirname,"./src/common"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router.js"),
                "store":path.join(__dirname,"./src/store"),
                "api":path.join(__dirname,"./src/api")   
            }
        }
    }
}   
