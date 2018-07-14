import { Component, Vue } from 'vue-property-decorator';

import { Inject } from '~/core';
import { City, ICitiesService, ICitiesServiceId } from '~/shared';

@Component
export default class CityAddComponent extends Vue {
    public city: City = null;
    public name = '';

    @Inject() citiesService: ICitiesService;

    public async search() {
        if (!this.name) {
            return;
        }
        
        this.city = await this.citiesService.search(this.name);
    }
}
