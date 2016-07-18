import { Component, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tracker } from 'meteor/tracker';
import { Parties } from '../../../collections/parties.ts';

import template from './party-details.html';

@Component({
    selector: 'party-details',
    template
})

export class PartyDetails {
    partyId: string;
    party: Object;

    constructor(private route: ActivatedRoute, private ngZone: NgZone) { }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.partyId = params['partyId'];

            Tracker.autorun(() => {
                this.ngZone.run(() => {
                    this.party = Parties.findOne(this.partyId);
                });
            });
        });
    }
}