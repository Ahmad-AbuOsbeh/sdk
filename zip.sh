npm install
npm run build

cd scripts
zip -r -X ../scripts.zip * -x *tinymce/* -x **.map
cd ..
cd styles
zip -r -X ../styles.zip *
cd ..

cd fonticons
zip -r -X ../fonticons.zip *
cd ..
