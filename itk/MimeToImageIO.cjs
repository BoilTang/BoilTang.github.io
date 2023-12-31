"use strict";

const mimeToIO = new Map([['image/jpeg', 'itkJPEGImageIOJSBinding'], ['image/png', 'itkPNGImageIOJSBinding'], ['image/tiff', 'itkTIFFImageIOJSBinding'], ['image/x-ms-bmp', 'itkBMPImageIOJSBinding'], ['image/x-bmp', 'itkBMPImageIOJSBinding'], ['image/bmp', 'itkBMPImageIOJSBinding'], ['application/dicom', 'itkGDCMImageIOJSBinding']]);
module.exports = mimeToIO;