***To contribute to this project***
1. Clone the project 
`$ git clone https://www.github.com/kemoszn/pychain.git`
2. Install pip 
`$ sudo apt install python3-pip` or `$ sudo apt install python-pip`
2. Install virtualenv 
`$ pip3 install virtualenv` or `$ pip install virtualenv`
3. Create a virtual enviroment in your project directory 
`$ virtualenv venv`
4. Activate the virtual enviroment you created and run the following command:
`$ source venv/bin/activate`
5. Install the project requirements 
`$ pip install -r requirements.txt`
6. Migrate then run the project's backend server 
``` 
$ python manage.py migrate
$ python manage.py runserver 
```
7. Make sure that everything is working as expected by going to 127.0.0.1:8000/get_chain 
8. Run NodeJS server  from https://github.com/kemoszn/PyChain/blob/master/frontend/README.md

9. **Done!**
