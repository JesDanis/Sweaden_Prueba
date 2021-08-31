from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in apptest/__init__.py
from apptest import __version__ as version

setup(
	name='apptest',
	version=version,
	description='prueba',
	author='orlando Cholota',
	author_email='edwin_orlando83@hotmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
