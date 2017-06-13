'use strict';

angular
  .module('hrnLandingApp')
	.controller('mainController', [
		function( ) {

      this.highlights = [
        {
            name: 'Home',
            icon: 'fa-home',
            color: '#9c0'
        },
        {
            name: 'Main Stage',
            icon: 'fa-microphone',
            color: '#18a7e0'
        },
        {
            name: 'HR Technology',
            icon: 'fa-cog',
            color: '#bb6e3d'
        },
        {
            name: 'Talent & Recruitment',
            icon: 'fa-eye',
            color: '#57b1b8'
        },
        {
            name: 'Smart Data',
            icon: 'fa-pie-chart',
            color: '#8a5ea4'
        },
        {
            name: 'Learning',
            icon: 'fa-lightbulb-o',
            color: '#00a29a'
        },
        {
            name: 'Adoption',
            icon: 'fa-puzzle-piece',
            color: '#81b041'
        },
        {
            name: 'HR SS & Payroll',
            icon: 'fa-refresh',
            color: '#809453'
        },
        {
            name: 'Wellbeing & Rewards',
            icon: 'fa-database',
            color: '#a92a31'
        },
        {
            name: 'Digital HR',
            icon: 'fa-power-off',
            color: '#ee2a7b'
        },
        {
            name: 'Diversity & Inclusion',
            icon: 'fa-smile-o',
            color: '#3b8954'
        },
        {
            name: 'Think Tank',
            icon: 'fa-home',
            color: '#3f80c2'
        },
        {
            name: 'Think Tank II',
            icon: 'fa-home',
            color: '#3f80c2'
        },
        {
            name: 'disruptHR',
            icon: 'fa-home',
            color: '#cca82e'
        },
        {
            name: 'Product Demo',
            icon: 'fa-star',
            color: '#e41a52'
        }
    ];

		}
	]);
