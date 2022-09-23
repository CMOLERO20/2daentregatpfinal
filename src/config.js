export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase:{
        "type": "service_account",
        "project_id": "prueba-98739",
        "private_key_id": "c24b203bf468ba8461540f4b46657ead6836fec3",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC32DEpJQCVd/U6\nHXJHx1CThIf/H3oLbpvwz6e9dLTExO/197AtGHY9dsvJ7wCi7tliKsyulPxSIC/a\nRe17yuYzItR5RZIDNHbqO4JsSGbJZ0FQlDv86Jxf7liYukoZwGN7F2EN1Kb7rcp4\nZAC+NKvAp93vKryLj57CH1NoZUFLig+b767B25Obvc3DtY3nFLWQla980p0mmAME\ni+iCyRfGLOUMfxhNlHCpxqIl0NtrQB6qvoYIWYsYeowxdnSY3J5QkJfQU7IQ8QDC\n6aAENzF50Q08quWuoFPOQ/DPG6JLVlfvWlpUC0Vp0qQv2iD7ka2fJCvj9dKOwxgA\nNajM4kl/AgMBAAECggEADRHY10JGEXPNPCJV+p9c7ZfWH6XqHcAkl7dgU+1lLbkl\nQnKNrkikA0hoqKr0LyEiCClFxg8ma8o8MxBi/gV79w+w7j9eNLPsOxVO9z0jo/Br\n9sgLBoODUAvLdaDsxEbmns+xlFoIiWTrodwHwReEGR0PmVsLu2cGINCfgKqOIuOh\nArSdOuXxSfPgPCuQZsxvbOist6eN1p4M4Z5+J3OZNrOjtxaSczyC3jMtti+Y/Uhg\nN9laoyJ3RkX7VuSS11/abS/y3R5RT+Fz0PAMUGfCGhWGIMwpChDh7tzDEUkxXaiE\nz+wsPQ5pPouO4QYuSxFtFMMzJvlygVBxAMoPQw4FXQKBgQDek84f8sAPmZY+zmJq\nWHPV0Jna2nFXG30BRU/FKIosRcI41qPjhEllqkyRhO+iDhsPH9lMoRAlo3Y71d3T\n8Jq/gPVcVv2g2Cd63AgNb3DB1S2wJMRpT/oTKTdm3fwfRBbOfEjFWvv7VvJq/KnT\nC5Ri9/kA024dQyDc9y9FuJUHIwKBgQDTc3CRjj61nThgznHiA4p+PAOLKgFdh2qe\nVZ/KQThqjF1UsMQmDgQ6XzqjzzLuNDecSp2GkKk6QC7WCbK4O2dTwDTQsuHl9Q6S\n/DD2KENqmith45THW+EBr1L+p/KoCCOgN4kGtForiBIQV8j7ivsO30OoLbZK8CmD\nRXktifWH9QKBgDvovMqMpHWOeYpeMs89D7C1fTQTJ/6yP2tgJKCE0OwpuqVh4KsU\nqEzdEc75YSbVdSMVB4BAuf/nh6ODZTnuwThalbBNGed5Ruci4mf7XvZNUwbeXp+a\nD02pAmiFx58CzMC3Yz77xmdYd9ekOnG75CzfYf5+6lyl/Op8/hReIn7RAoGAU5ml\nnPbHVli1rJiSsBBEVkp2ADR4W7kpbzZdOcL1gjLCx7QnqQALreRus8s80K72eaWK\niGRzc+NiYR9ueKaL4LHyb7z50UhFHdn1pa0fkmsn0cj/zp5F5LujralLKCInq7Wp\nSGxP5jwjIDEE9mbpgeTFxB1moFQ5pXv3QAj2eW0CgYB8Xs5adPrLrEoj9QdfzNCZ\nsYjU3INRPWxzZefLTgMl72xY6jGVIptdyLIxqJvz7BlaNdaNfmTxU1HyOrv3rwAD\nR1iwi0REuCLijxjglkcelQV+C35N2UiLkB27RQT/44+nk2WFRPXwgswMonkohkCb\nZDMiwDHox+UO3/EymbWPSw==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-7nxbt@prueba-98739.iam.gserviceaccount.com",
        "client_id": "110663775263507105368",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7nxbt%40prueba-98739.iam.gserviceaccount.com"
      },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'coderhouse',
            password: 'coderhouse',
            database: 'coderhouse'
        }
    }
}
