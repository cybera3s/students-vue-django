<div id="top"></div>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<div align="center">
  <h1 align="center">Students</h3>

  <p align="center">
It's Sample of <b>Students Table</b>  website that allows logged in users to access , delete or add a new one into students table. 
Using <b>Django</b> as back-End to Handle Database and <b>Django REST Framework</b> to serve REST API for data manipulation in database and also login, logout and identify users through <b>HTTP</b>  with <b>Token Authentication</b>  system. Using <b>VueJS 3</b> as Front-End framework to create a single page applications As well as taking advantage of reactivity of that and also it's Responsive by <b>Bootstrap 5</b>
  
  </p>
</div>


https://user-images.githubusercontent.com/74768669/168882801-d974ff25-92dd-4fe1-a059-3d1d993cf858.mp4





### Built With
 * [Django](https://www.djangoproject.com/)
 * [Django REST Framework](https://www.django-rest-framework.org/)
* [Vue.js](https://vuejs.org/)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)


### Prerequisites

* npm (Debian)
  ```sh
  sudo apt install npm
  ```
 * python (Debian)
  
   	```sh
	sudo apt install python
	  ```
### Installation

Clone the repo
   ```sh
   git clone https://github.com/cybera3s/students-vue-django.git
   ```
change directory to frontend and install required packages
   ```sh
   cd frontend && npm install
   ```
run development server
   ```sh
   npm run serve
   ```
if everything goes well and server is running then for the server side: 
 change directory to backend 
	 
    cd ../backend
create virtual environment 

    python -m virtualenv venv
  activate venv
  

    source venv/bin/activate

install required packages

    pip install -r requirements.txt
create databse tables

    python manage.py makemigrations api
    python manage.py migrate
create a super user

    python manage.py createsuperuser

start Django deveopment server

    python manage.py runserver

if everything goes well go to:   http://localhost:8080
 


<!-- USAGE EXAMPLES -->
## Usage

if both development servers or up go to home page by
 http://localhost:8080
You can log in with the username and password you created for your superuser
after log in you redirect to [students](http://localhost:8080/students) table page you can add or delete any row of table

Any other usage and information served API will find in http://127.0.0.1:8000/swagger/

<!-- LICENSE -->
## License

Distributed under the GPL License




<!-- CONTACT -->
## Contact

Sajad Safa - cybera.3s@gmail.com

Project Link: [https://github.com/cybera3s/students-vue-django](https://github.com/cybera3s/students-vue-django)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/cybera3s/students-vue-django.svg?style=for-the-badge
[contributors-url]: https://github.com/cybera3s/students-vue-django/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/cybera3s/students-vue-django.svg?style=for-the-badge
[forks-url]: https://github.com/cybera3s/students-vue-django/network/members
[stars-shield]: https://img.shields.io/github/stars/cybera3s/students-vue-django.svg?style=for-the-badge
[stars-url]: https://github.com/cybera3s/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/cybera3s/students-vue-django.svg?style=for-the-badge
[issues-url]: https://github.com/cybera3s/students-vue-django/issues
[license-shield]: https://img.shields.io/github/license/cybera3s/students-vue-django.svg?style=for-the-badge
[license-url]: https://github.com/cybera3s/students-vue-django/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/cybera3s
[product-screenshot]: images/screenshot.png
