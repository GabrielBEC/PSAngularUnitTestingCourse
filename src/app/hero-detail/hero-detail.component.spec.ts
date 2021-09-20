import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../hero.service";
import { HeroDetailComponent } from "./hero-detail.component";

import { Location } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { of } from "rxjs";

describe('HeroDatailComponent', () => {

    let fixture: ComponentFixture<HeroDetailComponent>
    let mockActivateRoute, mockHeroService, mockLocation;

    beforeEach(() =>  {
        mockActivateRoute = {
            snapshot: {paramMap: { get: () => { return '3'; } }}
        }
        mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero'])
        mockLocation = jasmine.createSpyObj(['back'])

        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [HeroDetailComponent],
            providers: [
                {provider: ActivatedRoute, useValue: mockActivateRoute},
                {provider: HeroService, useValue: mockHeroService},
                {provider: Location, useValue: mockLocation},
            ]
        })
        fixture = TestBed.createComponent(HeroDetailComponent)

        mockHeroService.getHero.and.returnValue(of({id: 3, name: 'SuperDude', strength: 100}))
    })

    xit('should render hero name in a h2 tag', () => {
        fixture.detectChanges()

        expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE')
    })

})