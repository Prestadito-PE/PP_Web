
export const DeviceType=():string=>{
    let deviceType: string = "Desconocido";
    const userAgent: string = navigator.userAgent;
    const screenWidth: number = window.innerWidth;
    
    if (userAgent.match(/Android/i) || 
        userAgent.match(/webOS/i) || 
        userAgent.match(/iPhone/i) || 
        userAgent.match(/iPad/i) || 
        userAgent.match(/iPod/i) || 
        userAgent.match(/BlackBerry/i) || 
        userAgent.match(/Windows Phone/i)) {
      
      deviceType = "Mobile";
    } else if (screenWidth > 768) { // Establece el valor límite para las pantallas más pequeñas
      deviceType = "Desktop";
    } else {
      deviceType = "Mobile";
    }
    
    return deviceType;
}

