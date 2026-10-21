            const parent = React.createElement("div1",
                {id: "parent"},
                [React.createElement("div",{id: "child1"},
                [React.createElement("h1",{},"Hi am H1"),
                React.createElement("h2",{},"Hi am H1")]),
                React.createElement("div",{id: "child2"},

                [React.createElement("h1",{},"Hi am H1"),
                React.createElement("h2",{},"Hi am H1")])]
                );
            console.log(parent);
            
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(parent);