cellPhone = {
    sumsung: {
        models: {
            s5: {
                sim: "dual sim",
                ram: "4GB",
                rom: "16GB",
                camera: '8MGP',
                display: '4.3 inch'
            },
            s6: {
                sim: "single",
                ram: "4GB",
                rom: "16GB",
                camera: '8MGP',
                display: '4.3 inch'
            },
            s7: {
                sim: "dual sim",
                ram: "4GB",
                rom: "16GB",
                camera: '8MGP',
                display: '4.3 inch'
            },
            s8: {
                sim: "dual sim",
                ram: "4GB",
                rom: "16GB",
                camera: '8MGP',
                display: '4.3 inch'
            },
        },
    },
    iphone: {
        models: {
            i9: {
                sim: "single",
                rom: "16GB",
                camera: '8MGP',
                display: '6.2 inch'
            },
            i10: {
                sim: "dual sim",
                rom: "16GB",
                camera: '16MGP',
                display: '4.3 inch'
            },
            i11: {
                sim: "dual sim",
                rom: "16GB",
                camera: '32MGP',
                display: '4.3 inch'
            },
        }
    }
}

const show = () => {
    var search = document.getElementById("search").value;
    // console.log(search)
    var flag = false;

    if (search != undefined && search !== null && search !== '' && search !== " ") {
        for (var i in cellPhone) {
            for (var j in cellPhone[i]) {
                for (var k in cellPhone[i][j]) {
                    if (search.toLowerCase() === k.toLowerCase()) {
                        document.getElementById("searchBox").innerHTML = `
                    <table border= 2 >
                        <tr>
                            <th>Sim </th>
                            <th>Rom </th>
                            <th>Camera </th>
                            <th>Display </th>
                        </tr>
                        <tr>
                            <td>${cellPhone[i][j][k].sim}</td>
                            <td>${cellPhone[i][j][k].rom}</td>
                            <td>${cellPhone[i][j][k].camera}</td>
                            <td>${cellPhone[i][j][k].display}</td>
                        </tr>
                    </table>
                `
                        flag = true;
                        break;
                    }

                }
            }
        }
        if (!flag) {
            alert("cellphone not found...")
        }
    }
}
