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
            '/ddcategory.php':{
                target:'http://search.m.dangdang.com',
                changeOrigin:true
            },
            '/search_ajax.php':{
                target:'http://search.m.dangdang.com',
                changeOrigin:true
            }
        },
    },
    configureWebpack:{
        resolve:{
            alias:{
                '@':path.join(__dirname,'./src'),
                'api':path.join(__dirname,'./src/api'),
                'components':path.join(__dirname,'./src/components'),
                'views':path.join(__dirname,'./src/views'),
                'utils':path.join(__dirname,'./src/utils'),
                'common':path.join(__dirname,'./src/common'),
                'router':path.join(__dirname,'./src/router'),
                'store':path.join(__dirname,'./src/store'),
                'lib':path.join(__dirname,'./src/lib'),
            }
        }
    }
}
