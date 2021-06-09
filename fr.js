module.exports = {
    term: {
        messageEvent: {
            welcome: (user, prefix) =>
              `Hey, je suis ${user}, mon prefix sur le serveur est \`${prefix}\``,
            notUse: "Vous ne pouvez pas utiliser cette commande.",
            cmdDisabled: "Cette commande est désactivé.",
            userNoPerm: (perm) =>
              `Vous devez avoir les autorisations  \`${perm}\` pour exécuter cette commande.`,
            botNoPerm: (perm) =>
              `Le bot doit avoir les autorisations  \`${perm}\` pour exécuter cette commande.`,
            cdwOn: (remain) =>
              `Vous êtes en période de récupération, essayez dans ${remain}s`,
            error: "Une erreur s'est produite mais le personnel a été informé de cet incident.",
        },
        TraductionManage: {
            notFound: (term) =>
              `${term}`,
        },
        
        addReaction: {
            ficheName: (name) => `Fiche de ${name}`,
        },
        
        RPMessage: {
            Error: "'Une erreur est survenue, il est impossible de créer un webhooks, il manque possiblement la permission de géré les Webhook `MANAGE_WEBHOOK`'",
            noPermission: "Je n'est pas la permission `MANAGE_WEBHOOKS`",
        },
        
        HelpCommande: {
            addeconomyrole: "Ajoute un role economique",
            createitem: "Crée un item et le met a un PNJ ",
            createpnj:"Crée un pnj",
            view: "Vois tous les personnage de la personne",
            register: "Crée un personnage",
            remove: "Supprime un personnage",
            inventory: "Regarde l'inventaire du personnage",
            fiche: "Envoi la fiche d'un personnage",
            setLang:"Change la langue du bot",
            edit: "Edite un personnage",
            carte: "Regarde les object a vendre du PNJ du channel",
            buy: "Achete un item d'un PNJ",
            
            allowcategory:
              "Autorise tous les channels de la category où le channel est mentionné ou actuelle",
            allowchannel: "Autorise le channel mentionné ou actuelle",
            viewchannel: "Donne tous les salon ignoré",
            ignorechannel: "Ignore le channel mentionné ou actuelle",
            ignorecategory:
              "Ignore tous les channels de la category où le channel est mentionné ou actuelle",
            prefix: "Donne un nouveau préfixe au bot",
            editpnj: "Edite un PNJ",
            removePNJ: "Supprime un PNJ",
            viewpnj:"Regarde la liste de tous les PNJ",
            setticket:"Configure les tickets"
        },
        clickButtonEvent:{
            ticketExiste:"Un ticket est deja ouvert",
            channelTopic: (username) =>`Ticket de ${username}`,
            create:"Vous avez ouvert un ticket",
            action:"Liste des actions",
            deleted: (username) => `Ticket supprimé par ${username}`,
            archived:"Le message a était archiver, mais il peu être rouvert ou supprimer a tous moment",
            sendToUser:(name,guildName)=>`Transcript du channel ${name} dans ${guildName}!\n Le ticket a etait fermé`,
            transcript:(name) =>`Transcript du channel ${name}! `,
            ticketOpenCategoryNotExist:"La catégorie des ticket ouvert n'existe pas",
            ticketCloseCategoryNotExist:"La catégorie des ticket fermer n'existe pas",
            ticketArchivedCategoryNotExist:"La catégorie des ticket archiver n'existe pas",
            ticketTranscriptNotExist:"Le channel des transcript n'existe pas",
            buttons:{
                ticketMessage:"Fermer",
                reopen:"Rouvrir",
                delete:"Supprimer",
                archived:"Archiver",
                transcript:"Transcript",
            },
            embed:{
                create:{
                    title: (username) => `Un ticket a était ouvert par ${username}`,
                    description:'Une fois le ticket terminer, appuyer sur le button'
                },
                close:{
                    title:(username) =>`Un ticket a était fermer par ${username}`,
                    description:"La procedure de fermeture du ticket est en cours",
                },
                reopen:{
                    title: (username) => `Un ticket a était rouvert par ${username}`,
                    description:'Une fois le ticket terminer, appuyer sur le button'
                },
                archive:{
                    title: (username) => `Un ticket a était archiver par ${username}`,
                    description:"Le message a était archiver, mais il peu être rouvert ou supprimer a tous moment"
                }
            }
        },
        
        Command: {
            view: {
                noServer: "Aucune de serveur trouvé sur l'utilisateur",
                noCharacter: "Aucun personnage trouvé",
                noAvatar: "Pas d'avatar",
                titleEmbed: (user) => `Liste des personnage de ${user}`,
            },
            register: {
                prefixNotFound:
                  'Le prefix est introuvable ou doit etre collé au "text"',
                deniedChar:
                  "Les carractere `*`, `_`, ```, `~`,`\"`, `'` sont refusé dans le prefix du personnage",
                prefixtoLong: "Le prefix est trop long",
                nameNotFound: "Le nom est trop long",
                missingName: "Le nom est introuvable",
                prefixExist: "Un personnage possède deja ce prefix",
                nameExist: "Un personnage possède deja ce nom",
                
                embed: {
                    title: (name) => `Le personnage ${name} souhaite être crée`,
                    description: (prefix) =>
                      `**Prefix:** ${prefix.toString()}\nVous pouvez maintenant faire\`\`\`${prefix.toString()}Bonjour\`\`\``,
                    confirmTitle: (name) =>
                      `Le personnage ${name} a était crée`,
                    rejectTitle: (name) => `Le personnage ${name} a refusé`,
                    endTitle: (name) =>
                      `Le personnage ${name} n'as pas était enregistré`,
                },
                button: {
                    confirm: "Confirmer",
                    reject: "Rejeter",
                },
            },
            remove: {
                idNotFound: "Le nom/ID est introuvable",
                characterNotFound: "Aucun personnage a était crée",
                providedCharacterNotfound: (name = "") =>
                  `Le personnage ${name} est introuvable`,
                characterDelete: (name) =>
                  `Le personnage ${name} a etait supprimé`,
            },
            
            inventory: {
                characterNotFound: "Aucun personnage a était crée",
                character: "Personnage",
                item: (item) => `${item.name} ⯍ Nombre: ${item.size}\n`,
                nothings: "Je n'es rien sur moi",
                embed: {
                    title: `Mon inventaire`,
                },
            },
            fiche: {
                idNotFound: "Le nom/ID est introuvable",
                characterNotFound: "Aucun personnage a était crée",
                embed: {
                    title: (name) => `Fiche de ${name}`,
                },
            },
            edit: {
                characterNotFound: "Aucun personnage a était crée",
                characterList: "Liste des personnages",
                changingAvatar: "L'avatar' a était change ",
                changingName: (name) => "Le nom a était change en " + name,
                prefixExist: "Un personnage possède deja ce nouveau prefix",
                prefixToLong: "Le prefix est trop long",
                actionList:"Liste des actions",
                awaitMessageAvatar:"Nouvelle image",
                awaitMessageName:"Nouveau nom",
                awaitMessagePrefix:"Nouveau prefix",
                awaitMessageDescription:"Nouvelle description",
                changingDescription:"Mise a jours de la description effectuer",
                changingPrefix: (prefix) =>
                  "Le prefix a était change en " + prefix,
                buttons: {
                    changeAvatar: "Changez l'avatar",
                    changeName: "Changer le nom",
                    changePrefix: "Changer le prefix",
                    changeDescription: "Changer la description",
                },
            },
            carte: {
                item: (id, item) =>
                  `[${id}] - ${item.name} ⯍ Prix: ${item.price}\n`,
                embed: {
                    title: (name) => `Voici la carte de ${name}`,
                    description: (prefix) =>
                      "Pour acheter veuillez faire `" +
                      prefix +
                      "buy {nom de l'item}`",
                    field: "Voici ma carte",
                },
            },
            
            allowcategory: {
                set: (name, size) =>
                  "Les channels de la categories " +
                  name +
                  " sont autorisé (" +
                  size +
                  " channel(s) ) ",
            },
            allowchannel: {
                set: (name) => "Le channel" + name + " est autorisé",
                notSet: (name) => "Le channel" + name + " n'est pas ignoré",
            },
            
            viewchannel: {
                channelList: "Liste des channel ignoré",
                channels: "Liste des channel",
                ignoreChannel: " channel ignoré",
                noChannel: "Pas de channel ignoré",
            },
            ignorechannel: {
                ignore: (name) => "Le channel" + name + " est ignoré",
                notignore: (name) => "Le channel" + name + " est deja ignoré",
            },
            ignorecategory: {
                set: (name, size) =>
                  `Les channels de la categories ${name} sont ignoré (${size} channel(s) )`,
            },
            prefix: {
                notfound: "Prefix non trouvé",
                characterHasPrefix:
                  "Un utilisateur possède deja ce prefix pour un de ces personnage ! ",
                prefixReset: "Le prefix était reset",
                prefixToLong:
                  "Le préfixe choisi ne doit pas dépasser **3** caractères.",
                prefixCharNotPermitted:
                  "Les caractère `*`, `_`, `\``, `~` sont refusé dans le prefix du bot",
                setPrefix: (prefix) => `Le prefix est défini sur ${prefix}`,
            },
            addeconomyrole: {
                set: "Le role a etait mis en temps que gain",
                noGain: "Aucun gain trouvé",
            },
            createitem: {
                nogain: "Aucun gain trouvé",
                nameNotFound: "Le nom est introuvable",
                itemfound: "L'item existe deja",
                priceNaN: "Le prix indiqué n'est pas un chiffre",
                newItem: (itemStr, name) =>
                  `L'item ${itemStr} a était ajouté au PNJ ${name}`,
            },
            editpnj: {
                NPCList: "Liste des PNJ",
                actionList:"Liste des actions",
                awaitMessageAvatar:"Nouvelle image",
                awaitMessageName:"Nouveau nom",
                awaitMessageChannel:"Nouveau channel",
                changingChannel: (name) =>`Nouveau channel mis sur ${name}`,
                
                changingAvatar: "L'avatar' a était change ",
                changingName: (name) => "Le nom a était change en " + name,
    
            },
            createpnj:{
                nameNotfound:"Aucun nom trouvé",
                pnjCreate:"Ce PNJ a était crée",
                pnjexist:"Ce PNJ existe déjà",
                NPCAlreadyInChannel:"Un PNJ est deja dans ce channel"
            },
            removePNJ:{
                NPCList:"Liste des PNJ",
                noName:"Aucun nom trouvé",
                buttons:{
                    cancel:"Annuler",
                    confirm:"Confirmer",
                },
                
                conserved:"Personnage non supprimé",
                removed:"Personnage supprimé",
                ActionList:"Liste des action"
            },
            setLang:{
                setting: (lang) => "La langue a était mis sur " + lang,
                langChoice:"Choix de la langue"
            },
            viewpnj:{
                titleEmbed:"Liste des PNJ"
            },
            setticket:{
                buttons:{
                    ticketCategory:"Configuré les nouveau ticket",
                    ticketArchived:"Configuré les ticket archivé",
                    ticketTranscript:"Configuré les transcript",
                    ticketClose:"Configuré les channel fermé",
                    ticketMessage:"Configuré le message des tickets",
                    Message:"Ouvrir un ticket"
                },
                embed:{
                    title:"Ticket",
                    description:"Cliquer sur le button pour ouvrir un ticket"
                },
                ActionList:"Liste des actions",
                awaitChannel:"En attente du channel",
                successOpen:"Le channel pour les tickets ouvert a était mis",
                successArchived:"Le channel pour les tickets archivé a était mis",
                successClose:"Le channel pour les tickets fermé a était mis",
                successTranscript:"Le channel pour les transcript a était mis",
                expire:"Le temps est écoulé"
            }
            
        },
    },
}
