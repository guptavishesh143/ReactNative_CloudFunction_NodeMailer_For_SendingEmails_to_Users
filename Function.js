//This is only the function you have to write the main code on your own


//Sending DATA TO SERVER CLOUD FUNCTION
  function SendEmailtoUser() {
    fetch("_cloud_function_url_", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        destEmail: Email,
        CCompany: CompanyName,
        CDiscount: Discount,
        CPromoCode: PromoCode,
        CLink: Link,
      }),
    })
      .then((response) => {
        console.log(response);
        navigation.popToTop();
        DefaultPreference.set("ShowModal", "1").then(function () {});
      })
      .catch((error) => {
        alert("error");
        console.error(error);
        
      });
  }
