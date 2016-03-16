var generate_resource = function(name, url, image) {
    var title = document.createElement('span');
    title.setAttribute('class', 'title');
    title.innerHTML = name;

    var img = document.createElement('img');
    img.src = image;
    img.setAttribute('class', 'img');
    img.setAttribute('style', 'background-image: url(' +
        image.source + '); background-position: ' +
        image.offset_x + '% ' + image.offset_y + '%');
    img.setAttribute('alt', name);

    var link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('target', '_blank');
    link.appendChild(img);
    link.appendChild(title);

    var clearfix = document.createElement('div');
    clearfix.setAttribute('class', 'clearfix');

    var resource = document.createElement('li');
    resource.appendChild(link);
    resource.appendChild(clearfix);

    return resource;
};

var display = function(id, elements) {
    var list = document.createElement('ul');
    list.setAttribute('class', 'resources');
    var container = $('#' + id);
    var loader = $('#' + id + " .loading");
    loader.css('display','none');
    for(var i=0; i<elements.length; i++) {
        list.appendChild(elements[i]);
    }
    container.get()[0].appendChild(list);
}

var resource_callback = function(info, data) {
    console.log(data);
    var elements = [];
    for(var i=0; i<data.length; i++){
        var resource = data[i];
        if (resource.type == "file"
         && resource.name != '.DS_Store') {
            var code = generate_resource(resource.name, resource.download_url, info.image)
            elements.push(code);
        }
    }
    display(info.id, elements);
};

$(function() {

    $(document).ready(function(){
        for(var i=0; i<resources.length; i++) {
            var info = resources[i];
            var dir = info.folder;
            $.ajax({
                dataType: "json",
                url: "resources/resource-loader.php?dir=" + encodeURIComponent(dir),
                success: function(data){resource_callback(info, data)}
            });
        }
    });

});
