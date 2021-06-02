module.exports ={
    term:{
        messageEvent:{
            welcome:(user,prefix) =>  `Hey, I'm ${user}, my prefix in this server is \`${prefix}\``,
            notUse : 'You cannot use this command.',
            cmdDisabled:"This command is disabled.",
            userNoPerm: (perm) => `You must have the \`${perm}\` permissions to run this command.`,
            botNoPerm: (perm) => `The bot must have the authorisations \`${perm}\` to execute this command.`,
            cdwOn: (remain) => `You are in a recovery period, try in ${remain}s`,
            error: 'An error occurred but staff were informed of this incident.'

        },
        TraductionManage:{
            notFound: (term) => `Missing translation: \`${term}\``
        },
        addReaction:{
            ficheName : (name) => "File of " + name,
        },

        RPMessage:{
            Error:"An error occurred, it is impossible to create a webhook, the permission to manage webhooks `MANAGE_WEBHOOK` is possibly missing"
        },


        HelpCommande:{
            view:'See all the characters of the person',
            register:'Create a character',
            remove:'Deletes a character',
            inventory:'Look at the character inventory',
            fiche:'Sending a character\'s sheet',
            edit:'Edit a character',
            carte:'Check out the items for sale from the channel NPC',
            buy:'Buy an item from an NPC'
        },


        Command:{
            view:{
                noServer:'No server found on the user',
                noCharacter:"No characters found",
                noAvatar:"No avatar",
                titleEmbed: (user)=>"List of characters from " + user,
            },
            register: {
                prefixNotFound: "The prefix cannot be found or must be stuck to the \"text\".",
                deniedChar: 'The characters `*`, `_`, ```, `~`, `"`, `\'` are refused in the character prefix',
                prefixtoLong: 'The prefix is too long',

                nameNotFound:'Le nom est trop long',
                missingName:"Le nom est introuvable",
                prefixExist:'Un personnage possède deja ce prefix',
                nameExist:'Un personnage possède deja ce nom',

                embed:{
                    title: (name) => "The character " + name + " wishes to be created",
                    description: (prefix) =>`**Prefix:** ${prefix.toString()}\nYou can now do\`\`\`${prefix.toString()}Hello\`\`\``,
                    confirmTitle:(name) => "The character "+ name +" was created",
                    rejectTitle: (name) => "The character"+ name +"  refused",
                    endTitle:(name) => "The character " + name + " has not been registered"
                },
                button:{
                    confirm:'Confirm',
                    reject:'Reject',
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
