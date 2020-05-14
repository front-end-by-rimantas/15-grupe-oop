"use strict";

// OOP - object oriented programming (objektinis programavimas)

// class - pagrindinis dalykas (receptas)
// object - class'es gaminys (pyragas)

// params:
// resolution
// ratio
// color
// remote: true/false
// type: flat / CRT

// metodai: ka galima su juo daryti?
// ijungti/isjungti
// pakeisti kanala
// keisti garsa
class Tv {
    constructor( name, resolution, ratio, color, remote, type ) {
        this.name = name;
        this.resolution = resolution;
        this.ratio = ratio;
        this.color = color;
        this.hasRemote = remote;
        this.type = type;
        this.turnedOn = false;
        this.channel = '';
        this.volume = 20;
    }

    turnOn() {
        if ( this.turnedOn ) {
            console.log(this.name + ' already is turned on.');
            return;
        }
        this.turnedOn = true;
        console.log(this.name + ' has been turned on.');
    }

    turnOff() {
        if ( !this.turnedOn ) {
            console.log(this.name + ' already is turned off.');
            return;
        }
        this.turnedOn = false;
        console.log(this.name + ' has been turned off.');
    }

    changeVolume( levelChange ) {
        this.volume += levelChange;
        if ( this.volume > 100 ) {
            this.volume = 100;
        }
        if ( this.volume < 0 ) {
            this.volume = 0;
        }
        console.log(`${this.name} volume changed to ${this.volume}.`);
    }

    currentVolume() {
        console.log(`Current volume for ${this.name} is ${this.volume}.`);
    }

    mute() {
        this.volume = 0;
        console.log(`${this.name} has been muted.`);
    }
}

const silelis = new Tv('Silelis', [4000, 3000], [4, 3], 'black', false, 'CRT');
console.log( silelis );

const lg = new Tv('LG', [8000, 6000], [4, 3], 'silver', true, 'flat');
console.log( lg );

// silelis.turnOff();
// silelis.turnOn();
// silelis.turnOff();

lg.turnOn();
lg.changeVolume(30);
lg.turnOff();
lg.turnOn();
lg.currentVolume();
lg.mute();