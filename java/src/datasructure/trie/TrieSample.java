package datasructure.trie;

public class TrieSample {

    // CS50 example

    private String target;
    private TrieSample[] paths = new TrieSample[10];


    public void add(int key, String target) {
        var strTarget = String.valueOf(key);
        TrieSample current = this;
        for (int i = 0; i < strTarget.length(); i++) {
            var chr = Integer.parseInt(String.valueOf(strTarget.charAt(i)));
            if (current.paths[chr] == null) {
                current.paths[chr] = new TrieSample();
            }
            current = current.paths[chr];
        }
        current.target = target;
    }

    public boolean find(int key, String target) {
        var strTarget = String.valueOf(key);
        TrieSample current = this;
        for (int i = 0; i < strTarget.length(); i++) {
            var chr = Integer.parseInt(String.valueOf(strTarget.charAt(i)));
            if (current.paths[chr] != null) {
                current = current.paths[chr];
            } else {
                return false;
            }
        }
        return current != null && current.target.equals(target);
    }


}
