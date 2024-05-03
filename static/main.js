const servers = {
        "ttt": {
                "name": "NotZenTown",
                "ip": "66.70.238.69",
                "port": 27015
        },
        "murder": {
                "name": "ZenAssassination",
                "ip": "66.70.238.69",
                "port": 27016
        },
        "ze": {
                "name": "ZenEscape",
                "ip": "66.70.238.69",
                "port": 27017
        },
        "zm": {
                "name": "ZenbieMode",
                "ip": "66.70.238.69",
                "port": 27018 
        },
        "jb": {
                "name": "ZenBreak",
                "ip": "66.70.238.69",
                "port": 27050
        },
}

function fetchServerObj(param) {
        if (param == undefined) {
                return servers.ttt
        }
        return servers[param]
}

function generateConnectionString(server_obj) {
        let url = `steam://connect/${server_obj.ip}:${server_obj.port}`
        if (server_obj.password) {
                url += `/${server_obj.password}`
        }

        return url
}

function generateButtons() {
        const main = document.querySelector('main')

        for (const [id, server] of Object.entries(servers)) {
                const button = document.createElement("a")
                button.id = id
                button.target = "_self"
                button.href = generateConnectionString(server)
                button.innerHTML = server.name
                const span = document.createElement('span')
                button.appendChild(span)
                main.appendChild(button)
        }
}