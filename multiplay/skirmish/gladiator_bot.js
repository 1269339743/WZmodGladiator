
/*
 * This file defines a standard AI personality for the base game.
 *
 * It relies on ruleset definition in /rulesets/ to provide
 * standard strategy descriptions and necessary game stat information.
 *
 * Then it passes control to the main code.
 */

// You can redefine these paths when you make a customized AI
// for a map or a challenge.
NB_PATH = "/multiplay/skirmish/";
NB_INCLUDES = NB_PATH + "nb_includes/";
NB_RULESETS = NB_PATH + "nb_rulesets/";

// please don't touch this line
include(NB_INCLUDES + "_head.js");

////////////////////////////////////////////////////////////////////////////////////////////
// Start the actual personality definition

// the rules in which this personality plays
include(NB_RULESETS + "standard.js");

// variables defining the personality
var subpersonalities = {
	MR: {
		chatalias: "mr",
		weaponPaths: [ // weapons to use; put late-game paths below!
			weaponStats.rockets_AT,
			weaponStats.machineguns,
			weaponStats.rockets_AS,
			weaponStats.rockets_AA,
			weaponStats.rockets_Arty,
		],
		earlyResearch: [ // fixed research path for the early game
			"R-Wpn-MG-Damage01",
			"R-Defense-Tower01",
			"R-Vehicle-Prop-Halftracks",
			"R-Struc-PowerModuleMk1",
			"R-Wpn-MG-Damage03",
		],
		minTanks: 1, // minimal attack force at game start
		becomeHarder: 3, // how much to increase attack force every 5 minutes
		maxTanks: 16, // maximum for the minTanks value (since it grows at becomeHarder rate)
		minTrucks: 0, // minimal number of trucks around
		minHoverTrucks: 0, // minimal number of hover trucks around
		maxSensors: 1, // number of mobile sensor cars to produce
		minMiscTanks: 0, // number of tanks to start harassing enemy
		maxMiscTanks: 0, // number of tanks used for defense and harass
		vtolness: 0, // the chance % of not making droids when adaptation mechanism chooses vtols
		defensiveness: 0, // same thing for defenses; set this to 100 to enable turtle AI specific code
		maxPower: 700, // build expensive things if we have more than that
		repairAt: 0, // how much % healthy should droid be to join the attack group instead of repairing
	},
	MC: {
		chatalias: "mc",
		weaponPaths: [
			weaponStats.cannons,
			weaponStats.machineguns,
			weaponStats.mortars,
			weaponStats.cannons_AA,
		],
		earlyResearch: [
			"R-Wpn-MG-Damage01",
			"R-Vehicle-Prop-Halftracks",
			"R-Wpn-Cannon1Mk1",
			"R-Struc-PowerModuleMk1",
			"R-Wpn-MG-Damage03",
		],
		minTanks: 1, becomeHarder: 3, maxTanks: 16,
		minTrucks: 0, minHoverTrucks: 0, maxSensors: 1,
		minMiscTanks: 0, maxMiscTanks: 0,
		vtolness: 0, defensiveness: 0,
		maxPower: 700,
		repairAt: 0,
	},
	FR: {
		chatalias: "fr",
		weaponPaths: [
			weaponStats.rockets_AT,
			weaponStats.flamers,
			weaponStats.fireMortars,
			weaponStats.rockets_AA,
			weaponStats.lasers,
		],
		earlyResearch: [
			"R-Wpn-Flamer-ROF01",
			"R-Vehicle-Prop-Halftracks",
			"R-Struc-PowerModuleMk1",
		],
		minTanks: 1, becomeHarder: 3, maxTanks: 16,
		minTrucks: 0, minHoverTrucks: 0, maxSensors: 1,
		minMiscTanks: 0, maxMiscTanks: 0,
		vtolness: 0, defensiveness: 0,
		maxPower: 700,
		repairAt: 0,
	},
	FC: {
		chatalias: "fc",
		weaponPaths: [
			weaponStats.cannons,
			weaponStats.flamers,
			weaponStats.fireMortars,
			weaponStats.cannons_AA,
			weaponStats.lasers,
		],
		earlyResearch: [
			"R-Wpn-Flamer-ROF01",
			"R-Vehicle-Prop-Halftracks",
			"R-Wpn-Cannon1Mk1",
			"R-Struc-PowerModuleMk1",
		],
		minTanks: 1, becomeHarder: 3, maxTanks: 16,
		minTrucks: 0, minHoverTrucks: 0, maxSensors: 1,
		minMiscTanks: 0, maxMiscTanks: 0,
		vtolness: 0, defensiveness: 0,
		maxPower: 700,
		repairAt: 0,
	},
	FF: {
		chatalias: "ff",
		weaponPaths: [
			weaponStats.flamers,
			weaponStats.lasers,
		],
		earlyResearch: [
			"R-Wpn-Flamer-ROF01",
			"R-Vehicle-Prop-Halftracks",
			"R-Struc-PowerModuleMk1",
			"R-Vehicle-Body11",
		],
		minTanks: 1, becomeHarder: 3, maxTanks: 16,
		minTrucks: 0, minHoverTrucks: 0, maxSensors: 1,
		minMiscTanks: 0, maxMiscTanks: 0,
		vtolness: 0, defensiveness: 0,
		maxPower: 700,
		repairAt: 0,
	},
	MM: {
		chatalias: "mm",
		weaponPaths: [
			weaponStats.machineguns,
			weaponStats.lasers,
		],
		earlyResearch: [
			"R-Wpn-MG-Damage01",
			"R-Vehicle-Prop-Halftracks",
			"R-Struc-PowerModuleMk1",
			"R-Wpn-MG-Damage03",
			"R-Vehicle-Body05",
			"R-Wpn-MG5",
		],
		minTanks: 1, becomeHarder: 3, maxTanks: 16,
		minTrucks: 0, minHoverTrucks: 0, maxSensors: 1,
		minMiscTanks: 0, maxMiscTanks: 0,
		vtolness: 0, defensiveness: 0,
		maxPower: 700,
		repairAt: 0,
	},
};

// this function describes the early build order
// you can rely on personality.chatalias for choosing different build orders for
// different subpersonalities
function buildOrder() {
	return false;
}



////////////////////////////////////////////////////////////////////////////////////////////
// Proceed with the main code

include(NB_INCLUDES + "_main.js");
