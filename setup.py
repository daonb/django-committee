
from setuptools import setup, find_packages

install_requires = [
    'python-openid',
#    'python-yadis',
    'oauth',
    'django-tagging',
    'South',
    'pyth',
    'django-debug-toolbar',
    'django-pagination',
    'django-piston',
    'django-extensions',
    'python-memcached',
    'nose',
    'django-nose',
    ]
setup(
        name = "django-committee",
        version = "0.1",
        url = 'http://github.com/ofri/django-committee',
        description = "Managing the knowledge of open and transparant committes",
        author = 'Benny Daon and others',
        packages = find_packages('src'),
        package_dir = {'': 'src'},
        install_requires = install_requires,
        classifiers=['Development Status :: 4 - Beta',
                 'Environment :: Web Environment',
                 'Framework :: Django',
                 'License :: OSI Approved :: BSD License',
                 'Natural Language :: Hebrew',
                 'Operating System :: OS Independent',
                 'Programming Language :: Python',
                 'Programming Language :: JavaScript'],
)

