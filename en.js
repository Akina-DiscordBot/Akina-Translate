module.exports = {
    term: {
        messageEvent: {
            welcome: (user, prefix) =>
              `Hey, I'm ${user}, my prefix in this server is \`${prefix}\``,
            notUse: "You cannot use this command.",
            cmdDisabled: "This command is disabled.",
            userNoPerm: (perm) =>
              `You must have the \`${perm}\` permissions to run this command.`,
            botNoPerm: (perm) =>
              `The bot must have the authorisations \`${perm}\` to execute this command.`,
            cdwOn: (remain) =>
              `You are in a recovery period, try in ${remain}s`,
            error: "An error occurred but staff were informed of this incident.",
            botNotInitialized: "The bot is not yet initialized"
        },
        TraductionManage: {
            notFound: (term) =>
              `${term}}`,
        },
        addReaction: {
            ficheName: (name) => "File of " + name,
        },
        
        RPMessage: {
            Error: "An error occurred, it is impossible to create a webhook, the permission to manage webhooks `MANAGE_WEBHOOK` is possibly missing",
            
            noPermission: "I dont have permission `MANAGE_WEBHOOKS`",
        },
        
        HelpCommande: {
            addeconomyrole: "Add economic role",
            createitem: "Create item and set to NPC",
            createpnj:"Create NPC",
            
            view: "See all the characters of the person",
            register: "Create a character",
            remove: "Deletes a character",
            inventory: "Look at the character inventory",
            fiche: "Sending a character's sheet",
            carte: "Check out the items for sale from the channel NPC",
            buy: "Buy an item from an NPC",
    
            setLang:"Change the language of the bot",
            edit: "Edit a character",
            
            allowcategory:
              "Allows all channels in the category where the channel is mentioned or current",
            allowchannel: "Authorise the mentioned or current channel",
            viewchannel: "Gives all shows ignored",
            ignorechannel: "Ignore the mentioned or current channel",
            ignorecategory:
              "Ignores all channels in the category where the channel is mentioned or current",
            prefix: "Give a new prefix to the bot",
            editpnj: "Edit an NPC",
            removePNJ: "Deletes an NPC",
            viewpnj:"Look at the list of all NPCs",
            setticket:"Configure the tickets"
        },
        /**
         * TODO
         *  - Translate
         */
        clickButtonEvent:{
            ticketExiste:"One ticket is already open",
            channelTopic: (username) =>`Ticket of ${username}`,
            create:"You have opened a ticket",
            action:"List of actions",
            deleted:(username) =>`Ticket close by ${username}`,
            archived:"The message has been archived, but it can be reopened or deleted at any time",
            sendToUser:(name,guildName)=>`Transcript of channel ${name} in ${guildName}!\nThe ticket was closed`,
            transcript:(name) =>`Transcript of the channel ${name}! `,
            ticketOpenCategoryNotExist:"The open ticket category does not exist",
            ticketCloseCategoryNotExist:"The closed ticket category does not exist",
            ticketArchivedCategoryNotExist:"The category of archived tickets does not exist",
            ticketTranscriptNotExist:"The transcript channel does not exist",
            buttons:{
                ticketMessage:"Close",
                reopen:"Reopen",
                delete:"Delete",
                archived:"Archiver",
                transcript:"Transcript",
            },
            embed:{
                create:{
                    title: (username) => `A ticket was opened by ${username}`,
                    description:'Once the ticket is complete, press the button'
                },
                close:{
                    title:(username) =>`A ticket was closed by ${username}`,
                    description:"The procedure for closing the ticket is underway",
                },
                reopen:{
                    title: (username) => `A ticket was reopened by ${username}`,
                    description:'Once the ticket is complete, press the button'
                }
            }
        },
        
        Command: {
            view: {
                noServer: "No server found on the user",
                noCharacter: "No characters found",
                noAvatar: "No avatar",
                titleEmbed: (user) => "List of characters from " + user,
            },
            register: {
                prefixNotFound:
                  'The prefix cannot be found or must be stuck to the "text".',
                deniedChar:
                  "The characters `*`, `_`, ```, `~`, `\"`, `'` are refused in the character prefix",
                prefixtoLong: "The prefix is too long",
                
                nameNotFound: "The name is too long",
                missingName: "The name cannot be found",
                prefixExist: "A character already has this prefix",
                nameExist: "A character already has this name",
                
                embed: {
                    title: (name) =>
                      "The character " + name + " wishes to be created",
                    description: (prefix) =>
                      `**Prefix:** ${prefix.toString()}\nYou can now do\`\`\`${prefix.toString()}Hello\`\`\``,
                    confirmTitle: (name) =>
                      "The character " + name + " was created",
                    rejectTitle: (name) => "The character" + name + "  refused",
                    endTitle: (name) =>
                      "The character " + name + " has not been registered",
                },
                button: {
                    confirm: "Confirm",
                    reject: "Reject",
                },
            },
            remove: {
                idNotFound: "The name or ID is not found",
                characterNotFound: "No characters have been created",
                providedCharacterNotfound: (name) =>
                  "The character" + name + " cannot be found",
            },
    
            inventory: {
                characterNotFound: "No characters were created",
                character: "Character",
                item: (item) => `${item.name} ⯍ Number: ${item.size}\n`,
                nothings: "I have nothing",
                embed: {
                    title: `My inventory`,
                },
            },
            fiche: {
                idNotFound: "The name/ID cannot be found",
                characterNotFound: "No characters were created",
                embed: {
                    title: (name) => `Card of ${name}`,
                },
            },
            edit: {
                characterNotFound: "No characters were created",
                characterList: "Character List",
                changingName: (name) => "The name was changed to " + name,
                awaitMessageAvatar:"New image",
                awaitMessageName:"New name",
                awaitMessagePrefix:"New prefix",
                awaitMessageDescription:"New description",
                changingDescription:"New description updated",
                prefixExist: "One character already has this new prefix",
                actionList:"Actions list",
                prefixToLong: "The prefix is too long",
                changingPrefix: (prefix) =>
                  "The prefix was changed to " + prefix,
                buttons: {
                    changeAvatar: "Change the avatar",
                    changeName: "Change the name",
                    changePrefix: "Change the prefix",
                    changeDescription: "Change the description",
                },
            },
            carte: {
                item: (id, item) =>
                  `[${id}] - ${item.name} ⯍ Prices: ${item.price}\n`,
                embed: {
                    title: `Here is what you can buy`,
                    description: (prefix) =>
                      "To purchase please do `" +
                      prefix +
                      "buy {item name}`",
                    field: "Here is my list",
                },
            },
    
            allowcategory: {
                set: (name, size) =>
                  "The channels of the categories " +
                  name +
                  " are allowed (" +
                  size +
                  " channel(s) ) ",
            },
            allowchannel: {
                set: (name) => "The channel" + name + " is allowed",
                notSet: (name) => "The channel" + name + " is not ignored",
            },
    
            viewchannel: {
                channelList: "Ignored channel list",
                channels: "List of channels",
                ignoreChannel: " ignored channel",
                noChannel: "No channel ignored",
            },
            ignorechannel: {
                ignore: (name) => "The channel" + name + " is ignored",
                notignore: (name) => "The channel" + name + " is already ignored",
            },
            ignorecategory: {
                set: (name, size) =>
                  `The channels of the categories ${name} are ignored (${size} channel(s) )`,
            },
            prefix: {
                notfound: "Prefix not found",
                characterHasPrefix:
                  "A user already has this prefix for one of his characters! ",
                prefixReset: "The prefix was reset",
                prefixToLong:
                  "The prefix chosen must not exceed **3** characters.",
                prefixCharNotPermitted:
                  "The characters `*`, `_`, `\``, `~` are rejected in the bot prefix",
                setPrefix: (prefix) => `The prefix is set to ${prefix}`,
            },
            addeconomyrole: {
                set: "The role was set up as a payoff",
                noGain: "No gains found",
            },
            createitem: {
                nogain: "No gains found",
                nameNotFound: "The name cannot be found",
                itemfound: "The item already exists",
                priceNaN: "The price indicated is not a figure",
                newItem: (itemStr, name) =>
                  `The item ${itemStr} has been added to the NPC ${name}`,
            },
            editpnj: {
                NPCList: "List of NPCs",
                actionList:"Actions list",
                awaitMessageAvatar:"New image",
                awaitMessageName:"New name",
                awaitMessageChannel:"New channel",
                changingAvatar: "Put the avatar",
                changingChannel: (name) =>`New channel set on ${name}`,
                changingName: (name) => "The name was changed to " + name,
    
            },
            createpnj:{
                nameNotfound:"No names found",
                pnjCreate:"Ce NPC a était crée",
                pnjexist:"This NPC already exists",
                NPCAlreadyInChannel:"An NPC is already in this channel"
    
            },
            removePNJ:{
                NPCList:"List of NPCs",
                noName:"No names found",
                buttons:{
                    cancel:"Cancel",
                    confirm:"Confirm",
                },
                
                conserved:"Character not deleted",
                removed:"Character deleted",
                ActionList:"List of actions"
            },
            setLang:{
                setting: (lang) => "The language was put on " + lang,
                langChoice:"Choice of language"
            },
            viewpnj:{
                titleEmbed:"NPC list"
            },
    
            /**
             * TODO
             *  - Translate
             */
            setticket:{
                buttons:{
                    ticketCategory:"Set up the new ticket",
                    ticketArchived:"Set up archived tickets",
                    ticketTranscript:"Configured transcripts",
                    ticketClose:"Configured closed channels",
                    ticketMessage:"Configured the ticket message",
                    Message:"Open a ticket"
                },
                embed:{
                    title:"Ticket",
                    description:"Click on the button to open a ticket"
                },
                ActionList:"List of actions",
                awaitChannel:"Waiting for the channel",
                successOpen:"The channel for open tickets was set up",
                successArchived:"The channel for archived tickets has been set",
                successClose:"The channel for closed tickets was set up",
                successTranscript:"The channel for transcripts has been set up",
                expire:"Time has expired"
            }
        },
    },
};
