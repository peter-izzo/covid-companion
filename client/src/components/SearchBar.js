import React from "react";


function SearchBar (){
   
    return (
        <div class="pa4-l">
            <form class="bg-light-red mw7 center pa4 br2-ns ba b--black-10">
                <fieldset class="cf bn ma0 pa0">
                    <legend class="pa0 f5 f4-ns mb3 black-80">Add to your circle</legend>
                    <div class="cf">
                        <label class="clip" for="name">Search Name</label>
                        <input class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Search Name" type="text" name="search-name" value="" id="search-name"/>
                        <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Search"/>
                    </div>
                </fieldset>
            </form>
        </div>
    );


}

export default SearchBar;