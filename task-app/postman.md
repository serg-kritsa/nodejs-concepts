configure 'No environment' dropdown 
    add environment name f.e. dev
        add variable in table
            VARIABLE        INITIAL VALUE       CURRENT VALUE
            url             localhost:3000
    add environment name f.e. prod
        add variable in table
            VARIABLE        INITIAL VALUE       CURRENT VALUE
            url             
    // access to environment variable with {{url}}



# javascript code executed after request 
## set environment variable
    request > |Tests|
    if (pm.response.code === 200) {
        pm.environment.set('authToken', pm.response.json().token)
    }
## access to environment variable with {{authToken}}
    Collections > ... (View more actions) > Edit
        |Auth| > Type +d'Bearer Token' > Token ='{{authToken}}'

Request > |Authorization| > Type +d'No Auth' // for not protected route


Request > |Body| > +r'form-data' > 
    KEY                         VALUE                       DESCRIPTION
    =name-from-      +'File'    +b'Choose Files' file.ext
    multer-single       
  // for not protected route
