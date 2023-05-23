import React, { useState } from "react";
import { View, Button } from "react-native";
import Share from "react-native-share";
import images from "../res/imagesBase64";

const SharePdfExample = () => {
  
  const[result, setResult] = useState<string>('');
  function getErrorString(error : any, defaultValue : any) {
    let e = defaultValue || 'Something went wrong. Please try again';
    if (typeof error === 'string') {
      e = error;
    } else if (error && error.message) {
      e = error.message;
    } else if (error && error.props) {
      e = error.props;
    }
    return e;
  }

  const sharePDF = async () => {
    const shareOptions = {
      title: 'Share Image',
      url: images.pdf1,
      failOnCancel: false,
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log('Result =>', ShareResponse);
      setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error, '')));
    }
  }

  const sharePDFs = async () => {
    const shareOptions = {
      title: 'Share file',
      failOnCancel: false,
      saveToFiles: true,
      urls: [images.pdf1, images.pdf2],
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log('Result =>', ShareResponse);
      setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error, '')));
    }
  }

  return (
    <View style={{marginTop: 50}}>
    <Button onPress={async()=>{sharePDF()
    }} title="Share PDF" />
    <Button onPress={async()=>{sharePDFs()
    }} title = "Share PDFs" />
  </View>
  );

};

export default SharePdfExample;