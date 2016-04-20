var data = require('./data');

Array.prototype.map = function (projectionFunction) {
    var results = [];
    this.forEach(function (itemInArray) {
        results.push(projectionFunction(itemInArray));
    });
    return results;
};
Array.prototype.filter = function (predicateFunction) {
    var results = [];
    this.forEach(function (itemInArray) {
        if (predicateFunction(itemInArray)) results.push(itemInArray);
    });
    return results;
};
Array.prototype.concatAll = function () {
    var result = [];
    this.forEach(function (subArr) {
        result.push.apply(result, subArr); //Array.prototype.push(x1,x2,...)
    });
    return result;
};
Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
    return this.map(function (item) {
        return projectionFunctionThatReturnsArray(item);
    }).concatAll();
};
Array.prototype.reduce = function (combiner, initialValue) {
    var counter, accumulatedValue;
    if (this.length === 0) return this;
    if (arguments.length === 1) {
        counter = 1;
        accumulatedValue = this[0];
    } else if (arguments.length >= 2) {
        counter = 0;
        accumulatedValue = initialValue;
    } else {
        throw "Invalid arguments.";
    }
    while (counter < this.length) {
        accumulatedValue = combiner(accumulatedValue, this[counter]);
        counter++;
    }
    return [accumulatedValue];
};

Array.zip = function (left, right, conbiner) {
    var len = left.length > right.length ? right.length : right.length,
        result = [];
    for (var i = 0; i < len; i++) {
        result.push(conbiner(left[i], right[i]));
    }
    return result;
}
Array.prototype.zip = function (right, combiner) {
    return Array.zip(this, right, combiner);
}



console.log(JSON.stringify((function () {
    var newReleases = data.newReleases;
    return newReleases.filter(function (item) {
        return item.rating === 5.0;
    }).map(function (item) {
        return item.id;
    });
})()));

console.log((function () {
    var movieLists = data.movieLists;
    return movieLists.map(function (movie) {
        return movie.videos.map(function (video) {
            return video.id;
        });
    }).concatAll();
})());

console.log((function () {
    var movieLists = data.movieLists1;
    return movieLists.map(function (movie) {
        return movie.videos.map(function (video) {
            return video.boxarts.filter(function (boxart) {
                return boxart.width === 200 && boxart.height === 200;
            }).map(function (boxart) {
                return {
                    id: video.id,
                    name: video.name,
                    url: boxart.url
                };
            });
        }).concatAll();
    }).concatAll();
})());

console.log((function () {
    var movieLists = data.movieLists1;
    return movieLists.concatMap(function (movie) {
        return movie.videos.concatMap(function (video) {
            return video.boxarts.filter(function (boxart) {
                return boxart.width === 200 && boxart.height === 200;
            }).map(function (boxart) {
                return {
                    id: video.id,
                    name: video.name,
                    url: boxart.url
                };
            });
        });
    });
})());

console.log((function () {
    var boxarts = data.boxarts;
    return boxarts.reduce(function (cal, cur) {
        return cal.width * cal.height > cur.width * cur.height ? cal : cur;
    }).map(function (boxart) {
        return boxart.url;
    });
})());

console.log((function () {
    var videos = data.videos;
    return videos.reduce(function (accumulatedMap, video) {
        var obj = {};
        obj[video.id] = video.title;
        return Object.assign(accumulatedMap, obj);
    }, {});
})());

console.log((function () {
    var movieLists1 = data.movieLists1;
    return movieLists1.concatMap(function (movie) {
        return movie.videos.concatMap(function (video) {
            return video.boxarts.reduce(function (accumulatedValue, currentValue) {
                return accumulatedValue.width * accumulatedValue.height > currentValue.width * currentValue.height ? currentValue : accumulatedValue;
            }).map(function (boxart) {
                return {
                    id: video.id,
                    title: video.title,
                    url: boxart.url
                };
            });
        });
    });
})());

console.log((function () {
    var videos = data.videos1, bookmarks = data.bookmarks;
    return videos.zip(bookmarks, function (video, bookmark) {
        return {
            videoId: video.id,
            bookmarkId: bookmark.id
        }
    });
})());

console.log((function () {
    var movieLists = data.movieLists2;
    return movieLists.concatMap(function (movie) {
        return movie.videos.concatMap(function (video) {
            return video.boxarts.reduce(function (a, c) {
                return a.width * a.height > c.width * c.height ? c : a;
            }).zip(video.interestingMoments.filter(function (interestingMoment) {
                return interestingMoment.type === 'Middle';
            }), function (boxart, interestingMoment) {
                return { id: video.id, title: video.title, time: interestingMoment.time, url: boxart.url };
            });
        });
    });
})());

console.log((function () {
    var list = data.lists, videos = data.videos2;
    return JSON.stringify(list.map(function (movie) {
        return {
            "name": movie.name,
            "videos": videos.filter(function (video) {
                return video.listId === movie.id;
            }).map(function (video) {
                return {
                    id: video.id,
                    title: video.title
                }
            })
        };
    }), null, '    ');
})());

console.log((function () {
    var list = data.lists, videos = data.videos2, boxarts = data.boxarts2, bookmarks = data.bookmarks2;
    return JSON.stringify(list.map(function (movie) {
        return {
            "name": movie.name,
            "videos": videos.filter(function (video) {
                return video.listId === movie.id;
            }).concatMap(function (video) {
                return boxarts.filter(function (boxart) {
                    return boxart.videoId === video.id;
                }).reduce(function (a, c) {
                    return a.width * a.height > c.width * c.height ? c : a;
                }).zip(bookmarks.filter(function (bookmark) {
                    return bookmark.videoId === video.id;
                }), function (boxart, bookmark) {
                    return {
                        id: video.id,
                        title: video.title,
                        url: boxart.url,
                        time: bookmark.time
                    }
                });
            })
        };
    }), null, '    ');
})());