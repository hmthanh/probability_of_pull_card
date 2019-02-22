function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}
$(document).ready(function () {
    

    var CardDuck = {
        0: ["Red", "Red"],
        1: ["Red", "Green"],
        2: ["Green", "Green"]
    };

    $("#Roll").click(function () {
        var _roll = parseInt($('#numberRoll').val());

        $("#result").html("");
        var eventTotal = 0;
        var eventRight = 0;
        var html = "";
        for (var i = 0; i < _roll; ++i) {
            let randomCard = getRandomInt(0, 3);
            let randomSide = getRandomInt(0, 2);
            
            // Get card
            let card = CardDuck[randomCard];
            // Get color
            let randomFrontSide = card[randomSide];
            let idxBack = (randomSide == 1) ? 0 : 1;
            let randomBackSide = card[idxBack];

            if (randomFrontSide == "Green"){
                eventTotal++;
            }
            if ((randomFrontSide == "Green") && (randomBackSide == "Green")){
                eventRight++;
            }
            html += "<div class='card bg-"+(randomFrontSide == "Green" ? "ligh" : "dark")+"'>";
            html += "    <div class='card-body'>";
            html += "    <h4 class='card-title'>(" + (i+1).toString() + ") : " + eventRight + "/" + eventTotal + "</h4>";
            html += "    <p class='card-text'>";
            html += "        C" + (randomCard + 1) + ": " + card[0] + " - " + card[1] + "<br/>";
            html += "        <button type='button' class='btn btn-" + (randomFrontSide == "Green" ? "success" : "danger") + "'>Front</button>";
            html += "        <button type='button' class='btn btn-" + (randomBackSide == "Green" ? "success" : "danger") + "'>Back</button>";
            html += "    </p>";
            html += "    </div>";
            html += "</div>";
        }

        var probability = eventRight/eventTotal;
        var htmlResult = "";
        htmlResult += "<div class='alert alert-success' role='alert'>";
        htmlResult += "<strong>Probability is : </strong> <a href='#' class='alert-link'>"+probability+"</a>";
        htmlResult += "</div>";
        $("#result").append(html);
        $("#resultProbility").html(htmlResult);
    });


});