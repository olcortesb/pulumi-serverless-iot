# pulumi-serverless-iot

Ejemplo de uso de Lambdas para el procesamiento y pre-procesamiento de datos enviados por dispositivos Iot

## Disclaimer β οΈ	π©

No utilizar en produccion sin agregar seguridad a las APIs, este ejemplo es solamente a modo de uso didactico. 

## Comenzando π

- Desplegado en AWS
- Insfraestructura construida con Pulumi (https://www.pulumi.com/)
- Desarrollado en Node.js
<!-- - Test con Mocha (https://mochajs.org/) -->
<!-- - Front clasico (Html,CCS,Jquery) -->

β΅ **Deployment** para conocer como desplegar el proyecto.

Organizacion de Archivos (Detalle entre parentesis)

```
serverless-iot
β   index.js (Definicion Infraestructura Pulumi Api Gateway)
β   package.json
β   pulumi.yaml (Configuracion basica Pulumi)
β
ββββ app
β    β   services.js (AWS Lambda)
β    |   helper.js (AWS Lambda)

```
### Arquitectura βΊ 

Arquitectura serverless basado en un Api gateway un Bucket S3 y varias Lambda.

<!-- ![image info](arquitectura.png) -->

### Pre-requisitos ππ§

Node.js
```
$ node -v
$ v10.16.3 
# o superior
```
Pulumi (mac)
```
$ brew install pulumi
```
instalacion otros sistemas: https://www.pulumi.com/docs/get-started/install/

AWS

Cuenta en AWS y Clave de acceso CLI

Exportar claves de acceso AWS

```
$ export AWS_ACCESS_KEY_ID=<>
$ export AWS_SECRET_ACCESS_KEY=<>
```

<!-- Mocha

```
$ npm install mocha

``` -->

<!-- ## Ejecutando las pruebas βοΈ
```
$ cd pokeapi
$ npm test
``` -->


## Despliegue π¦

```
$ cd serverless-iot
$ pulumi up
```
Borrado Stacks
```
$ cd serverless-iot
$ pulumi destroy
```
## Construido con π οΈ

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Pulumi](http://www.dropwizard.io/1.0.2/docs/) - El framework de infraestructura como codigo
* [Node.js](https://maven.apache.org/) - Runtime
* [AWS](https://rometools.github.io/rome/) - Cloud

## Autor βοΈ

Oscar Cortes Bracho -  @olcortesb

## Licencia π

Este proyecto estΓ‘ bajo la Licencia MIT License - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud π

Como siempre... a la familia!
Por prestarme tiempo de su tiempo!

---