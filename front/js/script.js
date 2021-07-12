$(() => {

	getAllCountries();
	$("#btnShowData").click(handleClick);
});
async function handleClick() {
	const userSearchValue = $("#userSearchValue").val();
    var test1 = $("#country")[0].checked;
    var test2 = $("#capital")[0].checked;
    if(test1 === true) {
        const res = await fetch(`http://localhost:9000/${userSearchValue}`);
        const jsonRes = await res.json();
        console.log(jsonRes);
    
        updateList(jsonRes.data);

    } else if(test2 === true ) {
        const userSearchValue = $("#userSearchValue").val();
	const res = await fetch(`http://localhost:9000/capital/${userSearchValue}`);
	const jsonRes = await res.json();
	console.log(jsonRes);

	updateList(jsonRes.data);


    }
        
    

}

async function getAllCountries() {
	const res = await fetch("http://localhost:9000/all");

	const jsonRes = await res.json();
	console.log(jsonRes);

	updateList(jsonRes.data);
}

function updateList(list) {

	$("#list").empty();


	list.forEach((country) =>
		$("#list").append(
			`
            <li class="card">
                <p> Country : ${country.name} - Capital : ${country.capital}</p>
                <p> Region : ${country.region}</p>
            </li>
        `
		)
	);
}


if ($('#region').is(':checked')) {
	const submitregions = $("#regionInput").val();
	const res = await fetch(`http://localhost:8000/region/${submitregions}`);
	const jsonRes = await res.json();
	console.log("this is region", $("#regionInput").val(), jsonRes);
	countriesList(jsonRes.data);
	if (jsonRes.data.length === 0) {
		alert("error: there is no region with that name");
	};
};

// var test1 = $("#country")[0].checked;
// console.log(test1);













