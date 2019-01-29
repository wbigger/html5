app = {
    init : function() {
        console.log("init inside app!");
        $("title").text("New title");
    }
};



$(document).ready(app.init);