# **Sneaker Stash**

* ***Sneaker Stash*** es un e-commerce dedicado a zapatillas, desarrollado exclusivamente como proyecto final para el curso de **React JS** de [CoderHouse](https://www.coderhouse.com/). Esta versión esta desarrollada en base a la version anterior: **[Sneaker Stash](https://ron2452.github.io/SneakerStash/)**

### *Lista de tareas futuras/hechas*

* [x] Categorias
* [x] Ordenar por
* [x] Pop Ups
* [x] Carrito
* [x] Firestore
* [ ] Logins
* [ ] Buscador
* [ ] Favoritos
* [ ] Formularios

# **Instalación**

## 1- Crea tu App de React

En la consola (preferentemente situada en el escritorio):

`npm create-react-app [nombre de la App]`

## 2- Clona este repositorio

* Abrir su consola de **Git** en la carpeta deseada y pegar lo siguiente:

 `git clone https://github.com/ron2452/SneakerStashReact.git`

* Una vez clonado, copie los archivos **"public"** y **"src"** y peguelos en la carpeta de su App creada anteriormente.

## 3- Paquetes

Tendrá que instalar los siguientes paquetes que seran explicados mas adelante. Abra la consola cmd dentro de su carpeta y pegue lo siguiente:

* ### React Router Dom v6

`npm i react-router-dom@6`

* ### Sweet Alert 2

`npm i sweetalert2`

* ### Firebase v9

`npm i firebase@9.0.0`

# **Paquetes**

## *React Router Dom v6*

[**Documentación**](https://reactrouterdotcom.fly.dev/docs/en/v6/getting-started/overview)

React Router Dom es una librería que nos ayuda a crear rutas. En esta aplicación es utilizada para crear rutas (mediante La etiqueta `</Link>`) y/o sacar información de la URL (mediante el hook `useParams()`), mas especificamente para IDs de productos o categorías.

## *Sweet Alert 2*

[**Documentación**](https://sweetalert2.github.io/#examples)

Sweet Alert 2 es una librería que nos permite poner pop ups de forma sencilla y muy configurables. En esta aplicación es utilizada en 3 instancias: agregar producto al carrito, quitar producto del carrito o informar que el pedido de compra se realizó exitosamente.

***Ejemplo:***

```
    Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
    )
```

## *Firebase v9*

[**Documentación**](https://firebase.google.com/docs/reference/js/firestore_?authuser=0)

Firebase es una plataforma para el desarrollo de aplicaciones web y aplicaciones móviles adquirida por Google. Es una plataforma integrada con Google Cloud Platform, que usa un conjunto de herramientas para la creación y sincronización de proyectos.

En esta aplicación utilizamos **Firestore** como una pequeña base de datos para guardar los productos y almacenar las ordenes de compra una vez que el usuario da click al boton de terminar la compra.

* **Las credenciales** de firestore se encuentran en un archivo .env.local por lo que **son privadas**, deberá crear su propio proyecto de firebase con una colección llamada ***"productos"*** [(click aquí)](https://console.firebase.google.com/) y seguir esta estructura para los productos:

```
{
    "nombre": string,
    "marca": string,
    "precio": number,
    "stock": number,
    "nuevo": boolean,
    "popular": boolean,
    "genero":"male/female",
    "img": string,
    "img_dos": string,
    "img_tres": string,
    "img_cuatro": string,
    "descripcion": string
}
```

* El string de "img", "img_dos" etc. **Deben ser URLs de imagenes**.

Una vez que obtenga sus credenciales, deberá generar un nuevo archivo .env.local suelto en la carpeta de su App y formatearlo de la siguiente manera:

```
REACT_APP_FIREBASE_APIKEY=
REACT_APP_FIREBASE_AUTHDOMAIN=
REACT_APP_FIREBASE_PROJECTID=
REACT_APP_FIREBASE_STORAGEBUCKET=
REACT_APP_FIREBASE_MESSAGINGSENDERID=
REACT_APP_FIREBASE_APPID=
```
