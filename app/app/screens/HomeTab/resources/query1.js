export   const  query1= [
    {
        name: "yukleme sehiri",
        title: "Please enter your name:",
        isRequired: true,
        controls:[{type:"text",
                    isRequired:true, 
                    text:"il", 
                    parent:"14" ,
                    name:"il",
                    placeholder:"yuklenecek sehir",
                    onChange:"handleChangemaster"}
                ],
        
        buttons:[
            {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
            {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }
           ]
        
    }, {
        name: "yükleme ilce",
        type: "text",
        inputType: "date",
        title: "Your birthdate:",
        autoComplete: "bdate",
        controls: [
            {type:"text", 
            isRequired:true, 
            text:"ilce", 
            parent:"value:" ,
            parentvalue:"Controller_il" ,

            placeholder:"yuklenecek ilce",
            onChange:"handleChangemaster"}
            ,

            {type:"textarea", 
            isRequired:true, 
            text:"adres", 
            placeholder:"adress",
            }
    ],
        buttons:[
            {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
            {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }

        ]
    }, {
        name: "arac tipi",
        type: "text",
        inputType: "color",
        title: "Your favorite color:",
        controls:[
                     {type:"text", 
                     isRequired:true, 
                     text:"arac tipi", 
                    placeholder:"arac tipi",
                    parent:"4" ,
                    onChange:"handleChangemaster"},

                
                ],
                buttons:[
                    {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
                    {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }
        
                ]
        
    }, {
        name: "kasa tipi",
        type: "text",
        inputType: "email",
        title: "Your e-mail:",
        placeHolder: "jon.snow@nightwatch.org",
        isRequired: true,
        autoComplete: "email",
        controls:[
            {type:"text", 
            isRequired:true, 
            text:"kasa tipi", 
            parent:"100009" ,
            placeholder:"kasa tipi",
            onChange:"handleChangemaster"}
        ],
        
        buttons:[
            {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
            {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }

        ],

        validators: [
            {
                type: "email"
            }
        ]
    }
    , {
        name: "yuk tipi",
        type: "text",
        inputType: "email",
        title: "Your e-mail:",
        placeHolder: "jon.snow@nightwatch.org",
        autoComplete: "email",
        controls:[
            {type:"text", 
            isRequired:true, 
            text:"yuk tipi", 
            parent:"9" ,
            placeholder:"yuk tipi",
            onChange:"handleChangemaster"}
        ],
        
        buttons:[
            {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
            {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }

        ],

        validators: [
            {
                type: "email"
            }
        ]
    }
    , {
        name: "yuk iceriği",
        type: "text",
        inputType: "email",
        title: "Your e-mail:",
        placeHolder: "jon.snow@nightwatch.org",
        autoComplete: "email",
        controls:[
            {type:"textarea", 
            isRequired:true, 
            text:"yuk iceriği", 
            name:"yuk_icerigi",
            placeholder:"yuk iceriği",
            }
            
        ],
        
        buttons:[
            {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
            {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }

        ],

        validators: [
            {
                type: "email"
            }
        ]
    }
    , 
    {
        name: "indirme sehiri",
        title: "Please enter your name:",
        isRequired: true,
        controls:[{type:"text", 
                    text:"indirme il", 
                    isRequired:true, 
                    parent:"14" ,
                    placeholder:"indirme il",
                    onChange:"handleChangemaster"}
                ],
        
                buttons:[
                    {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
                    {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }
        
                ]
                
    }, {
        name: "indirme ilce",
        type: "text",
        inputType: "date",
        title: "Your birthdate:",
        autoComplete: "bdate",
        controls: 
            [
            {type:"text", 
            isRequired:true, 
            text:"indirme ilce", 
            parent:"value:" ,
            parentvalue:"Controller_indirme il" ,

            placeholder:"indirme ilce",
            onChange:"handleChangemaster"}
            ,

            {type:"textarea", 
            isRequired:true, 
            text:"indirme_adres", 
            placeholder:"adress",
            }

    ],
    buttons:[
        {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
        {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }

    ]
}

];