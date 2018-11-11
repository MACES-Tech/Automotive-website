/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function(config) {
        // Define changes to default configuration here. For example:
        config.language = 'fr',
//        config.basicEntities = false;
//        config.htmlEncodeOutput = false;
//        config.entities = false;
        config.pasteFromWordRemoveFontStyles = false,
        config.pasteFromWordRemoveStyles = false,
        config.uiColor = '#f16e00',
        config.height = '250px',
        config.extraPlugins = 'copyformatting',
        config.copyFormatting_allowedContexts = true,
        config.toolbar = [{
                name: 'clipboard',
                items: ['Bold', 'Italic',
                    'Underline', 'BulletedList','Paste','PasteText','PasteFromWord', 'Table', 'TextColor',
                    'Link', 'Unlink', 'CopyFormatting', 'RemoveFormat', 'JustifyCenter', 'Outdent', 'Indent'
                ]
            },
            { name: '', items: ['Font', 'FontSize'] }
            //    config.extraPlugins = 'autogrow',
            //    config.autoGrow_minHeight = 230,
            //    config.autoGrow_maxHeight = 230
        ];
//        config.extraPlugins = 'imagepaste';

        //   config.toolbar_Full =
        //   [
        //   	{ name: 'document', items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
        //   	{ name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
        //   	{ name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
        //   	{ name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton',
        //           'HiddenField' ] },
        //   	'/',
        //   	{ name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
        //   	{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
        //   	'-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
        //   	{ name: 'links', items : [ 'Link','Unlink','Anchor' ] },
        //   	{ name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
        //   	'/',
        //   	{ name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
        //   	{ name: 'colors', items : [ 'TextColor','BGColor' ] },
        //   	{ name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
        //   ];
        //
        //    config.removePlugins = 'path,save,font';
        //    config.toolbar = [
        //         { name: 'insert', items: [ 'FontAwesome', 'Source' ] }];
    }
    //    	{ name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source' ] },
    //    	{ name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
    //    	{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Scayt' ] },
    //    	'/',
    //    	{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
    //    	{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
    //    	{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
    //    	{ name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar' ] },
    //    	'/',
    //    	{ name: 'styles', items: [ 'Styles', 'Format' ] },
    //    	{ name: 'tools', items: [ 'Maximize' ] },
    //    	{ name: 'others', items: [ '-' ] },
    //    	{ name: 'about', items: [  ] }
    //    ];
    //    config.toolbarGroups = [
    //    	{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
    //    	{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
    //    	{ name: 'editing', groups: [ /*'find', 'selection', 'spellchecker' */] },
    //    	{ name: 'forms' },
    //    	'/',
    //    	{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    //    	{ name: 'paragraph', groups: [ 'list', 'indent'/*, 'blocks', 'align', 'bidi'*/ ] },
    //    	{ name: 'links' },
    //    	{ name: 'insert' },
    //    	'/',
    //    	{ name: 'styles' },
    //    	{ name: 'colors' },
    //    	{ name: 'tools' },
    //    	{ name: 'others' },
    //    	{ name: 'about' }
    //    	];
    //};