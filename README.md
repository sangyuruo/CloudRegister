## 以3个节点做为一个集群：

eureka-peer-1  
eureka-peer-2  
eureka-peer-3  
## 配置/etc/hosts

127.0.0.1   eureka-peer-1  
127.0.0.1   eureka-peer-2  
127.0.0.1   eureka-peer-3 

## 工程下配置
### resource/config 下配置文件:   
application-peer1.yml  
application-peer2.yml  
application-peer3.yml  
### 修改各自的端口以及hostname.
* defaultZone 设置为:  
<pre>
http://admin:${security.user.password:admin}@eureka-peer-1:9001/eureka/,http://admin:${security.user.password:admin}@eureka-peer-2:9002/eureka/,http://admin:${security.user.password:admin}@eureka-peer-3:9003/eureka/
</pre>
* 端口  
application-peer1.yml:  
port: 9001  
application-peer2.yml: 	
port: 9002  
application-peer3.yml:  
port: 9003


## 启动方式
### 先打包  
./mvnw clean package -Pprod -Dmaven.test.skip=true 

### 分别启动3个节点-dev模式  
target/registry-1.0.1.war --spring.profiles.active=dev,git,peer1  
target/registry-1.0.1.war --spring.profiles.active=dev,git,peer2  
target/registry-1.0.1.war --spring.profiles.active=dev,git,peer3  

## IDEA中调试方法（只调试其中一个节点）
* 修改bootstrap.yml ，在active中增加peer3 。

* 右键JHipsterRegistryApp.java ->  debug 



