module.exports ={
    term:{
        messageEvent:{
            welcome:(user,prefix) => `Hey, je suis ${user}, mon prefix sur le serveur est \`${prefix}\``,
            notUse : 'Vous ne pouvez pas utiliser cette commande.',
            cmdDisabled:"Cette commande est désactivé.",
            userNoPerm: (perm) => `Vous devez avoir les autorisations  \`${perm}\` pour exécuter cette commande.`,
            botNoPerm: (perm) => `Le bot doit avoir les autorisations  \`${perm}\` pour exécuter cette commande.`,
            cdwOn: (remain) => `Vous êtes en période de récupération, essayez dans ${remain}s`,
            error: 'Une erreur s\'est produite mais le personnel a été informé de cet incident.'
        },
        TraductionManage:{
            notFound: (term,lang) => `Traduction manquante: \`${term}\`  in ${lang}`
        },

        addReaction:{
            ficheName : (name) => "Fiche de " + name,
        },

        RPMessage:{
            Error:"'Une erreur est survenue, il est impossible de créer un webhooks, il manque possiblement la permission de géré les Webhook `MANAGE_WEBHOOK`'"
        },


        HelpCommande:{
            view:'Vois tous les personnage de la personne',
            register:'Crée un personnage',
            remove:'Supprime un personnage',
            inventory:'Regarde l\'inventaire du personnage',
            fiche:'Envoi la fiche d\'un personnage',
            edit: {
                description:'Edite un personnage',
                subCommands:{
                    avatar:"Modifie l'avatar du personnage",
                    name:"Modifie le name du personnage",
                    prefix:"Modifie le prefix du personnage",
                    description:"Modifie la description du personnage",
                }
            },
            carte:'Regarde les object a vendre du PNJ du channel',
            buy:'Achete un item d\'un PNJ'
        },


        Command:{
            view:{
                noServer:'Aucune de serveur trouvé sur l\'utilisateur',
                noCharacter:"Aucun personnage trouvé",
                noAvatar:"Pas d'avatar",
                titleEmbed: (user)=>"Liste des personnage de " + user,
            },
            register: {
                prefixNotFound: "Le prefix est introuvable ou doit etre collé au \"text\"",
                deniedChar: 'Les carractere `*`, `_`, `\``, `~`,`"`, `\'` sont refusé dans le prefix du personnage',
                prefixtoLong: 'Le prefix est trop long',
                nameNotFound:'Le nom est trop long',
                missingName:"Le nom est introuvable",
                prefixExist:'Un personnage possède deja ce prefix',
                nameExist:'Un personnage possède deja ce nom',

                embed:{
                    title: (name) => "Le personnage " + name + " souhaite être crée",
                    description: (prefix) =>`**Prefix:** ${prefix.toString()}\nVous pouvez maintenant faire\`\`\`${prefix.toString()}Bonjour\`\`\``,
                    confirmTitle:(name) => "Le personnage " + name + " a était crée",
                    rejectTitle: (name) => "Le personnage " + name + " a refusé",
                    endTitle:(name) => "Le personnage " + name + " n'as pas était enregistré"
                },
                button:{
                    confirm:'Confirmer',
                    reject:'Rejeter',
                }
            },
            remove:{
                idNotFound:'Le nom/ID est introuvable',
                characterNotFound:'Aucun personnage a était crée',
                providedCharacterNotfound:(name)=> "Le personnage" + name + " est introuvable"
            }
        }
    }
}
