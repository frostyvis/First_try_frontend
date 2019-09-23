var token = "20920392924.c2205f9.e60fe7c7735f49e88efff6ff62770984";

$.ajax({
    url: "https://api.instagram.com/v1/users/self/",
    datatype: "jsonp",
    type: "get",
    data: {access_token: token},
    success: function(data){
        var data = data.data;
        Profile(data["username"], data["profile_picture"], data["counts"]["media"]);
    }
});

$.ajax({
    url: "https://api.instagram.com/v1/users/self/media/recent/",
    datatype: "jsonp",
    type: "get",
    data: {access_token: token, count: 5},
    success: function(data){
        nextImg = data.pagination["next_url"];
        Posts(data.data); 
    }
})

function Profile(name, img, media_counts){
    $("header #content").html("Всего Фото: " + media_counts);
    $("header #name").attr({href:"https://www.instagram.com/" + name }).html(name);
    $("header #img_profile").attr({src: img});
}

function Posts(data) {
    data.forEach(Post);
}

function Post(data) {
    var post = "<div class='post'><img src=" + data.images.low_resolution.url + " onLoad/><div>";
    var description = data.caption ? data.caption.text : "";
    if (description != "") post += "<p><strong>Описание:</strong> "+ description +"</p>";
	post +=	"<p><strong>Лайки:</strong> "+ data.likes.count +"</p>";
    post +=	"<p><strong>Комментарии:</strong> "+ data.comments.count +"</p>";
    if (data.tags.length > 0) post += "<p><strong>Теги:</strong> "+ data.tags.join(', '); +"</p>";
    post +=	"<p><strong>Дата публикации:</strong> " + moment(data.created_time * 1000).format('DD.MM.YYYY') + "</p></div></div>";
    $("#Content").append(post);
}

var nextImg;
function Next(){
    $.ajax({
        url: nextImg,
        dataType: "jsonp",
        success: function(data){
            nextImg = data.pagination["next_url"];
            Posts(data.data);
            if (nextImg == null)
                $("#ButtonLoad").hide();
        },
    });
}