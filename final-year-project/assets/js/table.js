$(document).ready(function() {
    
 
    // Apply the search

        var $cells = $("td");
    
        $("sb-search-input").keyup(function() {
            var val = $.trim(this.value).toUpperCase();
            if (val === "")
                $cells.parent().show();
            else {
                $cells.parent().hide();
                $cells.filter(function() {
                    return -1 != $(this).text().toUpperCase().indexOf(val);
                }).parent().show();
            }
        });
   
} );