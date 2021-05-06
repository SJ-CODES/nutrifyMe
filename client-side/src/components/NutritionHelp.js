import React from 'react'
// var unirest = require("unirest");
// var req = unirest("POST", "https://bigovenvolodimir-kudriachenkov1.p.rapidapi.com/getFoodGlossaryArticleByTerm");

function NutritionHelp () {

            

        

        {/*req.headers({
            "content-type": "application/x-www-form-urlencoded",
            "x-rapidapi-key": "117dd43122msh8b4c065caf97f0fp1b70ffjsnb073b9247b09",
            "x-rapidapi-host": "BigOvenvolodimir-kudriachenkoV1.p.rapidapi.com",
            "useQueryString": true
        });

        req.form({
            "bigovenUsername": "SJ-CODES",
            "term": "apple",
            "apiKey": "<REQUIRED>",
            "bigovenPassword": "Africansafari1"
        });


        req.end(function (res) {
            if (res.error) throw new Error(res.error);

            console.log(res.body);
        });*/}
    return (
        <div id="NutritionHelp">
            <div id='headerDisplay'>
                <h1>nutrifyMe</h1>
                <h3>MyProfile</h3>
                <a href="/HealthyRecipes"><button class="btn">Healthy Recipes</button></a>
                <a href="/login"><button class="btn"> Log out</button></a>
            </div>
                
        </div>
    )
}

export default NutritionHelp