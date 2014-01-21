module("Balanced.BatchProcessor");

asyncTest("is_complete", 4, function (assert) {
	var processor = Balanced.BatchProcessor.create({
		collection: [10, 20, 30]
	});
	processor.parallel(2)
		.each(function(i, num, done) {
			done(i + num);
			assert.ok(!processor.get("is_complete"));
		})
		.end().then(function(results) {
			assert.ok(processor.get("is_complete"));
			start();
		});

});

asyncTest("Batch Processing", 1, function(assert) {
	var processor = Balanced.BatchProcessor.create({
		collection: [10, 20, 30]
	});

	processor.parallel(10)
		.each(function(i, num, done) {
			done(i + num);
		})
		.end().then(function(results) {
			assert.deepEqual(processor.results, [10, 21, 32]);
			start();
		});
});
