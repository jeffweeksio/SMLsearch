/* 
* * * * * * * * * * * * * * * * * * * * * *
* Author: Jeff Weeks                      *
* Created: Summer 2013                    *
* Last Revised: 2015.3.26                 *
* Sibley Music Library                    *
* Website-to-Voyager Search Tool          *
* * * * * * * * * * * * * * * * * * * * * *
*/

// Prepares jQuery UI tabs
$(function() {
	$( "#tabs" ).tabs();

	// Initiates catalog search when the enter key is pressed and released while focus is in the text input field
	$( "#catalogSearchbox" ).keyup(function( e ) {
		if( e.keyCode == 13 ) {
			initiateCatalogSearch();
      	}
	});
  
	// Initiates score search when the enter key is pressed and released while focus is in the text input field
	$( "#scoresSearchbox" ).keyup( function( e ) {
		if( e.keyCode == 13 ) {
			initiateScoresSearch();
		}
	});
  
	// Initiates audio search when the enter key is pressed and released while focus is in the text input field
	$( "#audioSearchbox" ).keyup( function( e ) {
		if( e.keyCode == 13 ) {
			initiateAudioSearch();
		}
	});
	
	// Initiates video search when the enter key is pressed and released while focus is in the text input field
	$( "#videoSearchbox" ).keyup( function( e ) {
		if( e.keyCode == 13 ) {
			initiateVideoSearch();
		}
	});
	
	// Initiates Journals search when the enter key is pressed and released while focus is in the text input field
	$( "#journalsSearchbox" ).keyup( function( e ) {
		if( e.keyCode == 13 ) {
			initiateJournalsSearch();
		}
	});
	
	// Initiates Articles & Books search when the enter key is pressed and released while focus is in the text input field
	$( "#summonSearchbox" ).keyup( function( e ) {
		if( e.keyCode == 13 ) {
			initiateSummonSearch();
		}
	});
	
		
	// Initiates catalog search when the enter key is pressed and released while focus is in the search type selector field
	$( "#searchType" ).keyup( function( e ) {
		if( e.keyCode == 13 ) {
			initiateCatalogSearch();
		}
	});
	
	// Initiates score search when the enter key is pressed and released while focus is in the search type selector field
	$( "#scoresSearchType" ).keyup( function( e ) {
		if( e.keyCode == 13 ) {
			initiateScoresSearch();
		}
	});
	
	// Initiates audio search when the enter key is pressed and released while focus is in the search type selector field
	$( "#audioSearchType" ).keyup( function( e ) {
		if( e.keyCode == 13 ) {
			initiateAudioSearch();
		}
	});
	
	// Initiates catalog search when the enter key is pressed and released while focus is in the search type selector field
	$( "#videoSearchType" ).keyup( function( e ) {
		if( e.keyCode == 13 ) {
			initiateVideoSearch();
		}
	});
	
	// focuses (places curser) in the text entry field when the catalog tab is clicked
	$( "#catalog" ).click( function() {
		$( "#catalogSearchbox" ).focus();
	});

	// focuses (places curser) in the text entry field when the scores tab is clicked
	$( "#scores" ).click( function() {
		$( "#scoresSearchbox" ).focus();
	});
	
	// focuses (places curser) in the text entry field when the audio tab is clicked
	$( "#audio" ).click( function() {
		$( "#audioSearchbox	" ).focus();
	});
	
	// focuses (places curser) in the text entry field when the video tab is clicked
	$( "#video" ).click( function() {
		$( "#videoSearchbox" ).focus();
	});
	
	// focuses (places curser) in the text entry field when the journal tab is clicked
	$( "#journal" ).click( function() {
		$( "#journalsSearchbox" ).focus();
	});
	
	// focuses (places curser) in the text entry field when the Articles & Books tab is clicked
	$( "#summon" ).click( function() {
		$( "#summonSearchbox" ).focus();
	});


});	// end JQuery

	// **Prefix precedes search terms; suffixes follow search terms in the program-generated URL**
		
	// search prefix
	var searchPrefix = "http://catalog.lib.rochester.edu/vwebv/search?sk=sibley&searchArg=";
	
	// Advanced search Prefix
	var advSearchPrefix = "http://catalog.lib.rochester.edu/vwebv/search?sk=sibley&searchArg1=";
	                     
	// Article search prefix
	var articleSearchPrefix = "http://rochester.summon.serialssolutions.com/search?s.cmd=removeFacetValueFilter(IsFullText,true)&s.fvf%5B%5D=ContentType,Journal+Article,f&s.fvf%5B%5D=ContentType,Magazine+Article,f&s.fvf%5B%5D=ContentType,Conference+Proceeding,f&s.fvf%5B%5D=ContentType,Book+Review,f&s.fvf%5B%5D=IsFullText,true,f&s.fvf%5B%5D=ContentType,Newspaper+Article,f&s.fvf%5B%5D=ContentType,Paper,f&s.fvf%5B%5D=ContentType,Newsletter,f&s.fvf%5B%5D=ContentType,Dissertation,f&s.fvf%5B%5D=ContentType,Journal+%2F+eJournal,f&s.fvf%5B%5D=ContentType,Microfilm,f&s.fvf%5B%5D=ContentType,Book+Chapter,f&s.light=t&s.q="
	// Book search prefix
	var bookSearchPrefix = "http://rochester.summon.serialssolutions.com/search?s.fvf%5B%5D=ContentType%2CConference+Proceeding%2Cf&s.fvf%5B%5D=ContentType%2CBook+%2F+eBook%2Cf&s.fvf%5B%5D=ContentType%2CDissertation%2Cf&s.fvf%5B%5D=ContentType%2CMicrofilm%2Cf&s.fvf%5B%5D=ContentType%2CBook+Chapter%2Cf&s.q="
	// eArticle search prefix
	var eArticleSearchPrefix = "http://rochester.summon.serialssolutions.com/search?s.cmd=removeFacetValueFilter(ContentType,Book+%2F+eBook)&s.fvf%5B%5D=ContentType,Journal+Article,f&s.fvf%5B%5D=ContentType,Magazine+Article,f&s.fvf%5B%5D=ContentType,Conference+Proceeding,f&s.fvf%5B%5D=ContentType,Book+Review,f&s.fvf%5B%5D=ContentType,Newspaper+Article,f&s.fvf%5B%5D=ContentType,Newsletter,f&s.fvf%5B%5D=ContentType,Dissertation,f&s.fvf%5B%5D=ContentType,Book+Chapter,f&s.fvf%5B%5D=ContentType,Book+%2F+eBook,f&s.fvf%5B%5D=ContentType,Paper,f&s.fvf%5B%5D=IsFullText,true,f&s.fvf%5B%5D=ContentType,Journal+%2F+eJournal,f&s.fvf%5B%5D=ContentType,Microfilm,f&s.light=t&s.q="
	// eBook search prefix
	var eBookSearchPrefix = "http://rochester.summon.serialssolutions.com/search?s.cmd=addFacetValueFilters(IsFullText,true)&s.fvf%5B%5D=ContentType,Conference+Proceeding,f&s.fvf%5B%5D=ContentType,Book+%2F+eBook,f&s.fvf%5B%5D=ContentType,Dissertation,f&s.fvf%5B%5D=ContentType,Microfilm,f&s.fvf%5B%5D=ContentType,Book+Chapter,f&s.light=t&s.q="
	// eArticle & eBook search prefix
	var eArticleBookSearchPrefix = "http://rochester.summon.serialssolutions.com/search?s.cmd=addFacetValueFilters(IsFullText,true)&s.fvf%5B%5D=ContentType,Journal+Article,f&s.fvf%5B%5D=ContentType,Magazine+Article,f&s.fvf%5B%5D=ContentType,Conference+Proceeding,f&s.fvf%5B%5D=ContentType,Book+%2F+eBook,f&s.fvf%5B%5D=ContentType,Book+Review,f&s.fvf%5B%5D=ContentType,Newspaper+Article,f&s.fvf%5B%5D=ContentType,Paper,f&s.fvf%5B%5D=ContentType,Newsletter,f&s.fvf%5B%5D=ContentType,Dissertation,f&s.fvf%5B%5D=ContentType,Journal+%2F+eJournal,f&s.fvf%5B%5D=ContentType,Microfilm,f&s.fvf%5B%5D=ContentType,Book+Chapter,f&s.light=t&s.q="
	// Article & Book search prefix
	var articleBookSearchPrefix = "http://rochester.summon.serialssolutions.com/search?s.cmd=addFacetValueFilters(ContentType,Book+%2F+eBook)&s.fvf%5B%5D=ContentType,Journal+Article,f&s.fvf%5B%5D=ContentType,Magazine+Article,f&s.fvf%5B%5D=ContentType,Conference+Proceeding,f&s.fvf%5B%5D=ContentType,Book+Review,f&s.fvf%5B%5D=ContentType,Newspaper+Article,f&s.fvf%5B%5D=ContentType,Paper,f&s.fvf%5B%5D=ContentType,Newsletter,f&s.fvf%5B%5D=ContentType,Dissertation,f&s.fvf%5B%5D=ContentType,Journal+%2F+eJournal,f&s.fvf%5B%5D=ContentType,Microfilm,f&s.fvf%5B%5D=ContentType,Book+Chapter,f&s.light=t&s.q="
	
	// Searches the catalog
	initiateCatalogSearch = function(){
		var SMLOnly = document.getElementById('SMLCheck').checked;
		var search = document.getElementById('catalogSearchbox').value;
		// Converts input to lower case
		search.toLowerCase();
		// Creates an array of the individual search terms
		searchArray = search.split(" ");
		// Joins the array into a single string of terms connected by the + symbol
		searchArg1 = searchArray.join("+");
		searchArguments = searchPrefix + searchArg1;
		// Determines the user selected search type and assembles the URL by inserting the query between the appropriate prefix and suffix.
		searchType = document.getElementById('searchType').value;
		switch (searchType){
			
			case "keywords":
			searchArguments += "&submit=+&searchCode=GKEY%5E*";
			break;
		
			case "title":
			searchArguments += "&submit=+&searchCode=TALL"; 
			break;
		
			case "authorComposerPerformerName":
			searchArguments += "&submit=+&searchCode=NAME";
			break;
		
			case "authorComposerPerformerTitle":
			searchArguments += "&submit=+&searchCode=AUTH";			
			break;
		
			case 'boolean':
			searchArguments += "&submit=+&searchCode=CMD*";
			break;
		
			case "subject":
			searchArguments += "&submit=+&searchCode=SUBJ";			
			break;
		
			case "callNumber":
			searchArguments += "&submit=+&searchCode=CALL";
			break;
		}
		// Determines whether or not the "SML only" box is checked and assembles the URL accordingly
		if (SMLOnly && (searchType === 'keywords' || searchType === 'title' || searchType === 'boolean' || searchType === 'callNumber')){
			searchArguments += '&limitTo=LOCA%3DSibley+Music+Library&limitTo=LOCA%3DInternet&recCount=75&searchType=1';
		} else {
			searchArguments += '&limitTo=none&recCount=75&searchType=1';
		} 
		searchLink = searchArguments;
		// Directs user to Voyager search results - use top.location to break out of frames
		top.location.href = searchLink;
	};

	// Searches the catalog for scores
		initiateScoresSearch = function(){
		SMLOnly = document.getElementById('scoresSMLCheck').checked;
		search = document.getElementById('scoresSearchbox').value;
		// Converts input to lower case
		search.toLowerCase();
		// Creates an array of the individual search terms
		searchArray = search.split(" ");
		searchType = document.getElementById('scoresSearchType').value;
		// Joins the array into a single string of terms connected by the + symbol
		searchArg1 = searchArray.join("+");
		searchArguments = advSearchPrefix + searchArg1;
				
		// Determines the user selected search type and assembles the URL by inserting the query between the appropriate prefix and suffix.
		switch (searchType){
			
			case "keywords":
			searchArguments += "&argType1=all&searchCode1=GKEY";
			break;
			
			case "title":
			searchArguments += "&argType1=all&searchCode1=TALL";
			break;

			case "boolean":
			searchArguments += "&argType1=&searchCode1=CMD*";
			break;
		
		}
		// Determines whether or not the "SML only" box is checked and assembles the URL accordingly
		if (SMLOnly){
			searchArguments += '&combine2=and&searchArg2=&argType2=all&searchCode2=GKEY&combine3=and&searchArg3=&argType3=all&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&location=Sibley+Music+Library&type=cm&medium=all&language=all&content=all&media=all&carrier=all&recCount=75&searchType=2&page.search.search.button=Search';
		} else if (!SMLOnly){
			searchArguments += '&combine2=and&searchArg2=&argType2=all&searchCode2=GKEY&combine3=and&searchArg3=&argType3=all&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&location=all&type=cm&medium=all&language=all&content=all&media=all&carrier=all&recCount=75&searchType=2&page.search.search.button=Search';
		} 
		searchLink = searchArguments;
		// Directs user to Voyager search results - use top.location to break out of frames
		top.location.href = searchLink;
	};
	
	
	// Searches the catalog for audio recordings.
	initiateAudioSearch = function(){
		SMLOnly = document.getElementById('audioSMLCheck').checked;
		noEsm = document.getElementById('noEsm').checked;
		cdOnly = document.getElementById('cdOnly').checked;
		search = document.getElementById('audioSearchbox').value;
		// Converts input to lower case
		search.toLowerCase();
		// Creates an array of the individual search terms
		searchArray = search.split(" ");
		// Joins the array into a single string of terms connected by the + symbol
		searchArg1 = searchArray.join("+");
		searchArguments = advSearchPrefix + searchArg1;
		// Determines the user selected search type and assembles the URL by inserting the query between the appropriate prefix and suffix.
		searchType = document.getElementById('audioSearchType').value;
		switch (searchType){
			case 'keywords':
			searchArguments += "&argType1=all&searchCode1=GKEY";
			break;
		
			case 'titlekeyword':
			searchArguments += "&argType1=all&searchCode1=TKEY";
			break;
		
			case 'boolean':
			searchArguments += "&argType1=&searchCode1=CMD*";
			break;
		}
		// Determines what check boxes are checked and assembles the URL accordingly
		if (noEsm === true && cdOnly === false && SMLOnly === false){
			searchArguments += '&combine2=not&searchArg2=eastman+school+of+music&argType2=phrase&searchCode2=SERI&combine3=and&searchArg3=&argType3=all&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&location=all&type=jm&medium=all&language=all&content=all&media=all&carrier=all&recCount=75&searchType=2&page.search.search.button=Search';
		} else if (noEsm ===true && cdOnly === true && SMLOnly === false){
			searchArguments += '&combine2=not&searchArg2=eastman+school+of+music&argType2=phrase&searchCode2=SERI&combine3=and&searchArg3="4+3%2F4"&argType3=all&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&location=all&type=jm&medium=all&language=all&content=all&media=all&carrier=all&recCount=75&searchType=2&page.search.search.button=Search';
		} else if (noEsm ===true && cdOnly === true && SMLOnly === true){
			searchArguments += '&combine2=not&searchArg2=eastman+school+of+music&argType2=phrase&searchCode2=SERI&combine3=and&searchArg3="4+3%2F4"&argType3=all&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&location=Sibley+Music+Library&type=jm&medium=all&language=all&content=all&media=all&carrier=all&recCount=75&searchType=2&page.search.search.button=Search';
		} else if (noEsm ===true && cdOnly === true && SMLOnly === true){
			searchArguments += '&combine2=not&searchArg2=eastman+school+of+music&argType2=phrase&searchCode2=SERI&combine3=and&searchArg3="4+3%2F4"&argType3=all&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&location=Sibley+Music+Library&type=jm&medium=all&language=all&content=all&media=all&carrier=all&recCount=75&searchType=2&page.search.search.button=Search';
		} else if (noEsm ===false && cdOnly === true && SMLOnly === true){
			searchArguments += '&combine2=and&searchArg2=&argType2=all&searchCode2=GKEY&combine3=and&searchArg3="4+3%2F4"&argType3=all&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&location=Sibley+Music+Library&type=jm&medium=all&language=all&content=all&media=all&carrier=all&recCount=75&searchType=2&page.search.search.button=Search';
		} else if (noEsm ===false && cdOnly === false && SMLOnly === false){
			searchArguments += '&combine2=and&searchArg2=&argType2=all&searchCode2=GKEY&combine3=and&searchArg3=&argType3=all&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&location=all&type=jm&medium=all&language=all&content=all&media=all&carrier=all&recCount=75&searchType=2&page.search.search.button=Search';
		} else if (noEsm ===false && cdOnly === true && SMLOnly === false){
			searchArguments += '&combine2=and&searchArg2=&argType2=all&searchCode2=GKEY&combine3=and&searchArg3="4+3%2F4"&argType3=all&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&location=all&type=jm&medium=all&language=all&content=all&media=all&carrier=all&recCount=75&searchType=2&page.search.search.button=Search';
		} else if (noEsm ===false && cdOnly === false && SMLOnly === true){
			searchArguments += '&combine2=and&searchArg2=&argType2=all&searchCode2=GKEY&combine3=and&searchArg3=&argType3=all&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&location=Sibley+Music+Library&type=jm&medium=all&language=all&content=all&media=all&carrier=all&recCount=75&searchType=2&page.search.search.button=Search';
		} else if (noEsm ===true && cdOnly === false && SMLOnly === true){
			searchArguments += '&combine2=not&searchArg2=eastman+school+of+music&argType2=phrase&searchCode2=SERI&combine3=and&searchArg3=&argType3=all&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&location=Sibley+Music+Library&type=jm&medium=all&language=all&content=all&media=all&carrier=all&recCount=75&searchType=2&page.search.search.button=Search';
		}
		searchLink = searchArguments;
		// Directs user to Voyager search results - use top.location to break out of frames
		top.location.href = searchLink;
	};


	// Searches the catalog for video recordings
	initiateVideoSearch = function(){
		SMLOnly = document.getElementById('videoSMLCheck').checked;
		search = document.getElementById('videoSearchbox').value;
		// Converts input to lower case
		search.toLowerCase();
		// Creates an array of the individual search terms
		searchArray = search.split(" ");
		searchType = document.getElementById('videoSearchType').value;
		// Joins the array into a single string of terms connected by the + symbol
		searchArg1 = searchArray.join("+");
		searchArguments = advSearchPrefix + searchArg1;
				
		// Determines the user selected search type and assembles the URL by inserting the query between the appropriate prefix and suffix.
		switch (searchType){
			
			case "keywords":
			searchArguments += "&argType1=all&searchCode1=GKEY";
			break;
			
			case "titlekeyword":
			searchArguments += "&argType1=all&searchCode1=TKEY";
			break;

			case "boolean":
			searchArguments += "&argType1=&searchCode1=CMD*";
			break;
		
		}
		// Determines whether or not the "SML only" box is checked and assembles the URL accordingly
		if (SMLOnly){
			searchArguments += '&combine2=and&searchArg2=&argType2=all&searchCode2=GKEY&combine3=and&searchArg3=&argType3=all&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&location=Sibley+Music+Library&type=gm&medium=all&language=all&content=all&media=all&carrier=all&recCount=75&searchType=2&page.search.search.button=Search';
		} else if (!SMLOnly){
			searchArguments += '&combine2=and&searchArg2=&argType2=all&searchCode2=GKEY&combine3=and&searchArg3=&argType3=all&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&location=all&type=gm&medium=all&language=all&content=all&media=all&carrier=all&recCount=75&searchType=2&page.search.search.button=Search';
		} 
		searchLink = searchArguments;
		// Directs user to Voyager search results - use top.location to break out of frames
		top.location.href = searchLink;
	};
	
	// Searches the catalog for journals
		initiateJournalsSearch = function(){
		search = document.getElementById('journalsSearchbox').value;
		// Converts input to lower case
		search.toLowerCase();
		// Creates an array of the individual search terms
		searchArray = search.split(" ");
		// Joins the array into a single string of terms connected by the + symbol
		searchArg1 = searchArray.join("+");
		searchArguments = "http://catalog.lib.rochester.edu/vwebv/search?sk=sibley&searchArg=" + searchArg1;
		searchLink = searchArguments + "&searchCode=TALL&limitTo=TYPE%3Das&recCount=75&searchType=1&page.search.search.button=Search";
		// Directs user to Voyager search results - use top.location to break out of frames
		top.location.href = searchLink;
	};
	
		// Searches Summon Serial Solutions.
	initiateSummonSearch = function(){
		search = document.getElementById('summonSearchbox').value;
		booksOnly = document.getElementById('booksOnly').checked;
		articlesOnly = document.getElementById('articlesOnly').checked;
		fullTextOnly = document.getElementById('fullTextOnly').checked;
		// Converts input to lower case
		search.toLowerCase();
		// Creates an array of the individual search terms
		searchArray = search.split(" ");
		// Joins the array into a single string of terms connected by the + symbol
		searchString = searchArray.join("+");

		// Determines what check boxes are checked and assembles the URL accordingly
		if ((booksOnly === false && articlesOnly === false && fullTextOnly === false) ||
		    (booksOnly === true && articlesOnly === true && fullTextOnly === false)){
			searchString = articleBookSearchPrefix + searchString;
		} else if ((booksOnly === false && articlesOnly === false && fullTextOnly === true) ||
		           (booksOnly === true && articlesOnly === true && fullTextOnly === true)){
			searchString = eArticleBookSearchPrefix + searchString;
		} else if (booksOnly === true && articlesOnly === false && fullTextOnly === false){
			searchString = bookSearchPrefix + searchString;
		} else if (booksOnly === true && articlesOnly === false && fullTextOnly === true){
			searchString = eBookSearchPrefix + searchString;
		} else if (booksOnly === false && articlesOnly === true && fullTextOnly === false){
			searchString = articleSearchPrefix + searchString;
		} else if (booksOnly === false && articlesOnly === true && fullTextOnly === true){
			searchString = eArticleSearchPrefix + searchString;
		} 
		
		// Directs user to Summon search results - use top.location to break out of frames
		top.location.href = searchString;
	};
