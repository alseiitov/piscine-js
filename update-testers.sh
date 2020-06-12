rm -rf tests
mkdir tempdir
cd tempdir
git clone https://github.com/01-edu/public
cd ..
mkdir tests
mv ./tempdir/public/js/tests/* ./tests
rm -rf tempdir
