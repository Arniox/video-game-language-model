'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        return this.toIntent('HelloFortniteIntent');
    },

    HelloFortniteIntent() {
        this.ask('Hello Fortnite Community! How can I help you on your adventure?', 'Please say, map version season 4');
    },

    MapVersionIntent() {
        this.tell('Here\'s map version ' + this.$inputs.version.value + ', from Fortnite!');
    },

    ItemTypeIntent() {
        this.tell('Here\'s all ' + this.$inputs.itemType.value + ' items from Fortnite');
    },

    ItemTypeAndRarityIntent() {
        this.tell('Here\'s all ' + this.$inputs.itemRarity.value + ' ' + this.$inputs.itemType.value + ' items from Fortnite');
    },

    ItemDoubleRarityIntent() {
        this.tell('Here\'s all ' + this.$inputs.itemRarityOne.value + ' and ' + this.$inputs.itemRarityTwo.value + ' items from Fortnite');
    },

    ItemDoubleIntent() {
        this.tell('Here\'s all ' + this.$inputs.itemTypeOne.value + ' and ' + this.$inputs.itemTypeTwo.value + ' items from Fortnite');
    }
});

module.exports.app = app;
