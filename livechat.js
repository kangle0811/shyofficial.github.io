(function(d, m){
    var kommunicateSettings = 
        {"appId":"1868ac7e885beca4c8749eb62afd4a8d3","popupWidget":true,"automaticChatOpenOnNavigation":true};
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    window.kommunicate = m; m._globals = kommunicateSettings;
})(document, window.kommunicate || {});